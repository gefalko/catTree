import tree from './data/data';
import appController  from './controllers/appController';

// start app
console.log("App start");
const app = new appController(tree);
