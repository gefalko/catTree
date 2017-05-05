import catTree from '../src/app/services/catTree';
const printer = new catTree();

describe('Testing list2html function', ()=>{
    it('Should print empty list if empty input', ()=>{
        expect(printer.list2html()).toBe('<ul></ul>');
    });

    it('Should print 0 level list', ()=>{
        expect(printer.list2html([{name:'1', level: 0}])).toBe('<ul><li>1</li></ul>');
    })

    it('Should print 0 level list with 2 items', ()=>{
        expect(printer.list2html([{name:'1', level:0}, {name:'2', level:0}])).toBe('<ul><li>1</li><li>2</li></ul>');
    });

    it('Should print 1 level list', ()=>{
        expect(printer.list2html([{name:'1', level:0}, {name:'2', level:0} , {name:'1.2', level:1}])).toBe('<ul><li>1</li><li>2<ul><li>1.2</li></ul></li></ul>');
    });
    
    it('Should print 2 level list', ()=>{
        expect(printer.list2html([{name:'1', level:0}, {name:'2', level:0} , {name:'1.2', level:1}, {name:'1.2.1', level:2}])).toBe('<ul><li>1</li><li>2<ul><li>1.2<ul><li>1.2.1</li></ul></li></ul></li></ul>');
    });
    
    it('Should print 2 level list', ()=>{
        const input = [{name:'1', level:0}, {name:'2', level:0} , {name:'1.2', level:1}, {name:'1.2.1', level:2}];
        const res = '<ul><li>1</li><li>2<ul><li>1.2<ul><li>1.2.1</li></ul></li></ul></li></ul>';
        expect(printer.list2html(input)).toBe(res);
    });
    
    it('Should print 2 level list with 1 level branch', ()=>{
        const input = [
            {name:'1', level:0},
            {name:'1.1', level:1},
            {name:'2', level:0} , 
            {name:'1.2', level:1}, 
            {name:'1.2.1', level:2}
        ];
        const res = '<ul><li>1<ul><li>1.1</li></ul></li><li>2<ul><li>1.2<ul><li>1.2.1</li></ul></li></ul></li></ul>';
        expect(printer.list2html(input)).toBe(res);
    });
    
    it('Should print 2 level list with 2 level branch', ()=>{
        const input = [
            {name:'1', level:0},
            {name:'1.1', level:1},
            {name:'1.1.1', level:2},
            {name:'1.2', level:1},
            {name:'2', level:0} , 
            {name:'2.2', level:1}, 
            {name:'2.2.1', level:2}
        ];
        const res = `
            <ul>
                <li>1
                    <ul>
                        <li>1.1
                            <ul>
                                <li>1.1.1</li>
                            </ul>
                        </li>
                        <li>1.2</li>
                    </ul>
                </li>
                <li>2
                    <ul>
                        <li>2.2
                            <ul>
                                <li>2.2.1</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>`.replace(/\s/g,'');

        expect(printer.list2html(input)).toBe(res);
    });

    it('Should print 2 level list with 2 level branch an one first level branch have 2 some level nodes', ()=>{
        const input = [
            {name:'1', level:0},
            {name:'1.1', level:1},
            {name:'1.1.1', level:2},
            {name:'2', level:0} , 
            {name:'2.2', level:1}, 
            {name:'2.2.1', level:2}
        ];
        const res = `
            <ul>
                <li>1
                    <ul>
                        <li>1.1
                            <ul>
                                <li>1.1.1</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>2
                    <ul>
                        <li>2.2
                            <ul>
                                <li>2.2.1</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>`.replace(/\s/g,'');

        expect(printer.list2html(input)).toBe(res);
    });

    it('Should print tree with 4 branches. First branch without childs. Second 3 levels depth. Third branch with 2 childs and last branch with one child with 2 items.', ()=>{
        
        const input = [
            {name:'1',         level:0},
            {name:'1.1',       level:1},
            {name:'1.2',       level:1},
            {name:'1.2.1',     level:2},
            {name:'1.2.1.1',   level:3},
            {name:'1.2.1.1.1', level:4},
            {name:'1.3',       level:1},
            {name:'1.3.1',     level:2},
            {name:'1.3.2',     level:2},
            {name:'1.4',       level:1},
            {name:'1.4.1',     level:2},
            {name:'1.4.1.1',   level:3},
            {name:'1.4.1.2',   level:3},
        ];

        const res = `
            <ul>
                <li>1
                    <ul>
                        <li>1.1</li>
                        <li>1.2
                            <ul>
                                <li>1.2.1
                                    <ul>
                                        <li>1.2.1.1
                                            <ul>
                                                <li>1.2.1.1.1</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>   
                            </ul>
                        </li>
                        <li>1.3
                            <ul>
                                <li>1.3.1</li>
                                <li>1.3.2</li>
                            </ul>
                        </li>
                        <li>1.4
                            <ul>
                                <li>1.4.1
                                    <ul>
                                        <li>1.4.1.1</li>
                                        <li>1.4.1.2</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        `.replace(/\s/g,'');

        expect(printer.list2html(input)).toBe(res);
    });

});
