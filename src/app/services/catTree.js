export default class CatTree{

    printTreeRecursiveWay(node){
        let res = '<ul>'+this.getLi(node);

        if(node.data){
            for(let childNode of node.data){
                res+=`${this.printTreeRecursiveWay(childNode)}`;               
            }
        }
            
        return res += "</ul>";
    }

    printTreeIterativeWay(tree) {
        if(!tree.data)return "<ul>"+this.getLi(tree)+"</ul>";
        return this.list2html(this.tree2List(tree));
    }
    
    getLi(node){
        return `<li${this.getId(node)}>${node.name}</li>`
    }

    getId(node){
        return node.id ? ` data-id=${node.id}` : '';
    }

    tree2List(tree){

        let stack =[];
        let list = [];
        let node;

        stack.push(tree)

        tree.level = 0;

        while(stack.length !== 0) {

            node = stack.pop();
            list.push(node);

            if(node.data){
               for(let i = node.data.length - 1; i >= 0; i--) {
                   node.data[i].level = node.level + 1;
                   stack.push(node.data[i]);
               }
            }
        }

        return list;
    }

    list2html(list){
        
        if(!list){
            return '<ul></ul>';
        }

        let nowLevel;
        let res = `<ul><li${this.getId(list[0])}>`;
        let nextLevel;
      
        for(let i = 0; i < list.length; i++){
            
            nowLevel = list[i].level;

            if(list[i+1]){
                nextLevel = list[i+1].level;
            }else{
                nextLevel = null;
            }

            res += list[i].name;
            
            if(nextLevel != null && nextLevel > nowLevel){

                res += `<ul><li${this.getId(list[i+1])}>`;

            }else if(nextLevel != null && nextLevel < nowLevel){
                
                res += '</li>'+'</ul></li>'.repeat(nowLevel-nextLevel)+`<li${this.getId(list[i+1])}>`;

            }else if(nextLevel == nowLevel){

                res += `</li><li${this.getId(list[i+1])}>`;

            }
        }
       
        return res += '</li></ul>'.repeat(nowLevel+1);

    }


}
