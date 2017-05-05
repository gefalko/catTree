import catTree from '../src/app/services/catTree';
const printer = new catTree();

describe('Testing category tree printer', () => {

    
    const treeL1 = {
        name : 'test'
    }

    const resL1 = "<ul><li>test</li></ul>";
    
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
    

});
