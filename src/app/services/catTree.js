export default class CatTree{
    printTreeRecursiveWay(node){
        let res = '<ul>'+this.getLi(node);

        if(node.data)
            for(let childNode of node.data)
                res+=`${this.printTreeRecursiveWay(childNode)}`;               
            
        
        return res += "</ul>";
    }

    getLi(node){
        return `<li data-id='${node.id}'>${node.name}</li>`
    }

    printTreeIterativeWay(node){
        //return this.printTreeRecursiveWay(node);
        let res = '<ul>';

        res += this.getLi(node);

        let children, child, i, len;
        
        let depth = 1;
        
        let current = node.data[0];
        current.depth = depth;
        current.next = node.data[1];
        
        while (current) {
         

          depth = current.depth;
          
          if(!current.data)current.data = [];

          children = current.data;
          
          current = current.next;
          
          res += "<ul>"
          
          for (i = 0, len = children.length; i < len; i++) {
            child = children[i];
            child.depth = depth+1;
            child.next = current;
            current = child;
            res += this.getLi(current);
          }

          res += "</ul>";

        }
        
        return res += '</ul>'
    }
}
