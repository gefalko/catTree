export default class CatTree{

    printTreeRecursiveWay(node){
        let res = '<ul>'+this.getLi(node);

        if(node.data)
            for(let childNode of node.data)
                res+=`${this.printTreeRecursiveWay(childNode)}`;               
            
        
        return res += "</ul>";
    }

    printTreeIterativeWay(tree) {
        if(!tree.data)return "<ul>"+this.getLi(tree)+"</ul>";
        return this.printArray(this.tree2List(tree));
    }
    
    getLi(node){
        const id = node.id ? ` data-id=${node.id}` : '';
        return `<li${id}>${node.name}</li>`
    }

    tree2List(tree){
        let stack =[];
        let array = [];
        let node;
        let res = '';
  
        stack.push(tree)

        while(stack.length !== 0) {

            node = stack.pop();

            // set root node info
            if(!node.level){
                node.level = 0;
                node.last = true;
            }
            
            array.push(node);

            if(node.data){

               for(let i = node.data.length - 1; i >= 0; i--) {

                   if(node.data.length -1 == i)node.data[i].last = true; 
                   else node.data[i].last = false;                        
                   
                   node.data[i].level = node.level + 1;

                   stack.push(node.data[i]);
               }
            }
        }

        return array;
    }



    printArray(nodes){

        let res = "";

        for(let i=0; i < nodes.length; i++){
           
            let now = nodes[i];
            
            res += '<ul>'+this.getLi(now);
            
            res += this.getUls(this.countUls(nodes,i));
        }

        return res;
    }

    getUls(total){
        let res = '';
        
        for(let j = 0; j < total; j++)
            res += "</ul>";     
        
        return res;    
    }

    countUls(nodes, ci){

        const node = nodes[ci];
        
        if(node.data) return 0;
        if(!node.last) return 1;
        
        let count = 1;

        let level = node.level;

        for(let i = ci-1; i >= 0; i-- ){
            let now = nodes[i];

            if(level > now.level && !now.last)return count+1;

            if(level > now.level){
               level = now.level;
               count++;
            }

        }

        return count;
    }

}
