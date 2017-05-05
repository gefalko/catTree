// statefull class
export default class idGenerator{
    
    constructor(tree){
        this.tree = tree;
        this.id = 1;
        this.generateIds(this.tree);
    }
    
    generateIds(node){
        node.id = this.generateId();
        if(node.data){
            for(let childNode of node.data){
                this.generateIds(childNode);
            }
        }   
    }

    generateId(){
        return this.id++;
    }

    getTree(){
        return this.tree;
    }
}
