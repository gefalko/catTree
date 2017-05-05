import IdGenerator from '../services/idGenerator';
import CatTree from '../services/catTree';

export default class appController{
    
    constructor(tree){
        
        this.modeElement = document.getElementById("mode");
        this.appElement = document.getElementById("app");

        // 0 - recursive mode, 1 - iterative mode
        this.mode = 0;
        
        this.appElement.addEventListener('click', this.addCategoryListener.bind(this));
        this.modeElement.addEventListener('click', this.changeModeListener.bind(this));

        this.idGenerator = new IdGenerator(tree);
        this.tree = this.idGenerator.getTree();

        this.printSer = new CatTree();
        this.printHtml();
    }

    addCategoryListener(el){
        const parentId = el.target.getAttribute('data-id');
        const newCat = prompt("Please enter category name:", "");
        
        if (newCat == null || newCat == "") {
            console.log("User cancelled the prompt.");
        } else {
            this.addNewCategory(newCat, parentId);
            this.printHtml();
        }

    }

    changeModeListener(){
        if (document.getElementById('recursive').checked) {
            this.mode = 0;
            console.log("Print on recursive mode");
        }

        if (document.getElementById('iterative').checked) {
            this.mode = 1;
            console.log("Print on iterative mode");
        }

        this.printHtml();
    }

    addNewCategory(name, parentId){

        const node = this.getNode(parentId, this.tree);
       
        if(!node.data)node.data = [];

        node.data.push({id:this.idGenerator.generateId, name:name});

    }

   
    getNode(id, node){
        
        if(node.id == id)return node;
        
        if(node.data)
            for(let childNode of node.data){
                const node = this.getNode(id, childNode);
                if(node) return node;
            }
    }

    getHtml(){
        switch(this.mode){
            case 0: return this.printSer.printTreeRecursiveWay(this.tree);
            case 1: return this.printSer.printTreeIterativeWay(this.tree);
        }
    } 
    
   printHtml(){
        this.appElement.innerHTML = this.getHtml();
    }

}
