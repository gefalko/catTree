console.log("Hello!!!");


    const branch1 = 
                { 
                    name:'Dolor',
                    data:[
                        {name:'Orci',
                         data:[{ 
                               name: 'Quiz', 
                               data: [
                                   { name:'Odio'}
                               ]
                         }] 
                         }
                        
                    ]};
    const branch2 = {
        name:'Sit',
        data: [
            {name:'Amet'},
            {name:'Consectetaur'}
        ]
    }               

    const branch3 = {
        name:'Adipiscing',
        data:[
            { 
                name:'Elit',
                data: [{name:'Vestibulm'}, {name:'Vitae'}]
            }
        ]
    }

    const tree = {
        name:'Lorem',
        data: [ {name:'Ipsum'}, branch1, branch2, branch3]
    }

    function printTreeRecursiveWay(node){

        let res = `<ul><li>${node.name}</li>`

        if(node.data)
            for(let childNode of node.data)
                res+=`<li>${printTreeRecursiveWay(childNode)}</li>`;               
            
        
        res += "</ul>";

        return res;
    }

    function printTreeIterativeWay(node){

    }

   // const para = printChild(branch1);
   // const branch2html = printChild(branch2);
   // const branch3html = printChild(branch3);
    const treeHtml = printTreeRecursiveWay(tree);
    

    console.log(treeHtml);

    var element = document.getElementById("app");
    element.innerHTML = treeHtml;
