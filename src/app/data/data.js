
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
};

const tree = {
            name:'Lorem',
            data: [ {name:'Ipsum'}, branch1, branch2, branch3]
        };

export default tree;
