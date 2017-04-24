

import recCatTree2 from '../src/app/catTree';

 class RecursiveCatTree{

    constructor(){
        console.log("hello");
    }

    toHtml(tree){
        console.log("tree", tree);
        //this.printTreetIterativeWay(tree);
        //this.eachRecursive(tree);
        console.log(this.printChild(tree));
    }

    printChild(child){

        console.log("process child", child );

        let res = `<ul>
            <li>${child.name}</li>
        `
       

        if(child.data){
            for(let child2 of child.data){
                if(child2.data)res+=`<li>${this.printChild(child2)}</li>`;
                else res+=child2.name;
            }
        }

        res += "</ul>";

        return res;
    }

    printTreetIterativeWay(tree){
        let res = "<ul>"
        res += `<li>${tree.name}<li>`
        for(let branch of tree.data){
            console.log("branch", branch);
            res+="<ul>"
           
            if(branch.data instanceof Array){
                for(let child of branch.data){
                    
                    
                }
            }

            res+="</ul>";
        }

        res += "</ul>";

        console.log("Res ->", res);
    }

    eachRecursive(obj)
    {
        for (var k in obj)
        {
            if (typeof obj[k] == "object" && obj[k] !== null)
                eachRecursive(obj[k]);
            else
                console.log(obj[k]);
        }
    }



}

const recCatTree = new RecursiveCatTree();

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
                        
                    ]}
               

recCatTree.toHtml(branch1);


describe('start', ()=>{
   

                
    it('should print tree', ()=>{
    });
                /*
    const input = {
        name:'Lorem',
        data:[
                { name:'Ipsum'},
                { 
                    name:'Dolor',
                    data:[
                        {name:'Orci',
                         data:{ 
                               name: 'Quiz', 
                               data: [
                                   { name:'Odio'}
                               ]
                         }
                        }
                    ]
                },
                {name:'Sit', data: [ {name:'Amet'}, { name:'Consectetur' } ]},
                {name:'Adipiscing', data:[
                    {name:'Elit', data: [ {name:Vestibulm}, {name:'Vitae'} ]}
                ]}
        ],
                
    }
*/
    const result = `
        <ul>
            <li>Lorem<li>
            <li>
                <ul>
                    <li>Dolor</li>
                    <li>
                        <ul>
                            <li>Orci</li>
                            <li>
                                <ul>Quis</ul>
                                <li>
                                    <ul>
                                        <li>Odio</li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </li>
                </ul>
             </li>
        <ul>

    `
    const branch1html = `
                <ul>
                    <li>Dolor</li>
                    <li>
                        <ul>
                            <li>Orci</li>
                            <li>
                                <ul>Quis</ul>
                                <li>
                                    <ul>
                                        <li>Odio</li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </li>
                </ul>
    ` 


});
