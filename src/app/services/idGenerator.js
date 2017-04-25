export default class idGenerator{
    constructor(tree){
        this.tree = tree;
        this.id = 0;
        this.generateIds(this.tree);
    }
    
    generateIds(node){
        node.id = this.getId();
        if(node.data)
            for(let childNode of node.data)
                this.generateIds(childNode);
    }

    getId(){
        return this.id++;
    }

    getTree(){
        return this.tree;
    }
}
