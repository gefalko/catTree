import catTree from '../src/app/services/catTree';

const printer = new catTree();

describe('Testing category tree printer', () => {

    
    const treeL1 = {
        name : 'test'
    }

    const resL1 = "<ul><li>test</li></ul>";
    
    it('Should return one level tree on iterative way', () => {
        expect(printer.printTreeIterativeWay(treeL1)).toBe(resL1);
    })

    it('Should return one level tree on recursive way', () => {
        expect(printer.printTreeRecursiveWay(treeL1)).toBe(resL1);
    })


    const treeL2 = {
        name : 'test 1',
        data : [
            { name: 'test 1.1' },
            { name: 'test 1.2' },
            { name: 'test 1.3' },
        ]
    }

    const resL2 = "<ul><li>test 1</li><ul><li>test 1.1</li></ul><ul><li>test 1.2</li></ul><ul><li>test 1.3</li></ul></ul>";


    it('Should return 2 level tree in recursive way', () => {
        expect(printer.printTreeRecursiveWay(treeL2)).toBe(resL2);
    })

    it('Should return 2 level tree in iterative way', () => {
        expect(printer.printTreeIterativeWay(treeL2)).toBe(resL2);
    })

    const treeL3 = {
        name : 'test 1',
        data : [
            { name: 'test 1.2' },
            { name: 'test 1.3',
                data : [
                    { name : 'test 1.3.1'}
                ]
            }
        ]
    }

    const resL3 = "<ul><li>test 1</li><ul><li>test 1.2</li></ul><ul><li>test 1.3</li><ul><li>test 1.3.1</li></ul></ul></ul>";

    it('Should return 3 level tree with multi items recursive way', () => {
        expect(printer.printTreeRecursiveWay(treeL3)).toBe(resL3);
    })

    it('Should return 3 level tree with multi items iterative way', () => {
        expect(printer.printTreeIterativeWay(treeL3)).toBe(resL3);
    })
});
    
    const treeL3_1 = {
        name : 'test 1',
        data : [
            { name: 'test 1.2' },
            { name: 'test 1.3',
                data : [
                    { name : 'test 1.3.1',
                        data : [
                            { name : 'test 1.3.1.1' }
                        ]
                    },
                    { name: 'test 1.3.2'}
                ]
            },
            { name: 'test 1.4' }
        ]
    }

    const resL3_1 = "<ul><li>test 1</li><ul><li>test 1.2</li></ul><ul><li>test 1.3</li><ul><li>test 1.3.1</li><ul><li>test 1.3.1.1</li></ul></ul><ul><li>test 1.3.2</li></ul></ul><ul><li>test 1.4</li></ul></ul>";

    it('Should return 3 level tree with multi without order items recursive way', () => {
        expect(printer.printTreeRecursiveWay(treeL3_1)).toBe(resL3_1);
    })

    it('Should return 3 level tree with multi without order items iterative way', () => {
        expect(printer.printTreeIterativeWay(treeL3_1)).toBe(resL3_1);
    })

    const treeL3_2 = {
        name : 'test 1',
        data : [
            { name: 'test 1.2' },
            { name: 'test 1.3',
                data : [
                    { name : 'test 1.3.1'}
                ]
            },
            { name: 'test 1.4', 
                data : [
                    { name: 'test 1.4.1' }
                ]
            }
        ]
    }

    const resL3_2 = "<ul><li>test 1</li><ul><li>test 1.2</li></ul><ul><li>test 1.3</li><ul><li>test 1.3.1</li></ul></ul><ul><li>test 1.4</li><ul><li>test 1.4.1</li></ul></ul></ul>";

    it('Should return 3 level tree with multi without order items recursive way', () => {
        expect(printer.printTreeRecursiveWay(treeL3_2)).toBe(resL3_2);
    })

    it('Should return 3 level tree with multi without order items iterative way', () => {
        expect(printer.printTreeIterativeWay(treeL3_2)).toBe(resL3_2);
    })


    const treeL4 = {
        name : 'test 1',
        data : [
            { name: 'test 1.1',
                data : [
                    { name: 'test 1.1.1' },
                    { name: 'test 1.1.2' }
                ]
            },
            { name: 'test 1.2', 
                data : [
                    { name: 'test 1.2.1', 
                        data:[
                            { name: 'test 1.2.1.1'}
                        ]
                    }
                ]
            }
        ]
    }

    const resL4 = '<ul><li>test 1</li><ul><li>test 1.1</li><ul><li>test 1.1.1</li></ul><ul><li>test 1.1.2</li></ul></ul><ul><li>test 1.2</li><ul><li>test 1.2.1</li><ul><li>test 1.2.1.1</li></ul></ul></ul></ul>';
    
    it('Should return 4 level tree with multi without order items recursive way', () => {
        expect(printer.printTreeRecursiveWay(treeL4)).toBe(resL4);
    

    it('Should return 4 level tree with multi without order items iterative way', () => {
    expect(printer.printTreeIterativeWay(treeL4)).toBe(resL4);
    })

});


describe('Ul counting tests', () =>{

    
    describe('Should process correctly of 2 items tree', ()=>{

        const tree = {
            name : '1', 
            data : [
                {name: '1.1'}
            ]
        }

        const list = printer.tree2List(tree);

        describe('Should corectly convert tree to list', ()=>{
            
            it('Should array size be as tree nodes sum', ()=>{
                expect(list.length).toBe(2);
            })

        });

        describe('Should count uls correctly of 2 items tree', () => {
        
            it('Should count ul of root', () =>{
                expect(printer.countUls(list, 0)).toBe(0);
            })
            
            it('Should count ul of 1.1', () =>{
                expect(printer.countUls(list, 1)).toBe(2);
            })
        });    

    });


    
    describe('Should process correctly tree with 3 items', () => {
    
        const tree = {
            name : '1', 
            data : [
                {name: '1.1'},
                {name: '1.2'},
            ]
        }

        const list = printer.tree2List(tree);

        it('Shoul root element have 0 uls.', () => {
            expect(printer.countUls(list,0)).toBe(0);
        });

        it('Shoul element [1] have 1 uls.', () => {
            expect(printer.countUls(list,1)).toBe(1);
        });

        it('Shoul element [2] have 2 uls.', () => {
            expect(printer.countUls(list,2)).toBe(2);
        });
    });

    
    describe('Should process correctly tree with 4 items', () => {
    
        const tree = {
            name : '1', 
            data : [
                {name: '1.1',
                    data : [
                        {name: '1.1.1'}
                    ]
                },
                {name: '1.2'},
            ]
        };    

        const list = printer.tree2List(tree);

        it('Shoul root element have 0 uls.', () => {
            expect(printer.countUls(list,0)).toBe(0);
        });

        it('Shoul element [1] have 1 uls.', () => {
            expect(printer.countUls(list,1)).toBe(0);
        });

        it('Shoul element [2] have 2 uls.', () => {
            expect(printer.countUls(list,2)).toBe(2);
        });
        
        it('Shoul element [3] have 2 uls.', () => {
            expect(printer.countUls(list,3)).toBe(2);
        });
    });
})
