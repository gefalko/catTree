export class RecursiveCatTree{

    constructor(){
        console.log("hello");
    }

    toHtml(tree){
        console.log(tree);
        this.printTreetIterativeWay(tree);
       // this.eachRecursive(tree);
       
    }


    printTreetIterativeWay(tree){
        for(let branch of tree){
            console.log(branch);
        }
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
