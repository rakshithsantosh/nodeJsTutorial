//node runs on a server not on the browser
//we have a global object instead of a window object
//console.log(global)
//common JS modules instead of ES6 Module we use require instead of import
// missing some js api like fetch

const {add,subtract,multiply,divide} = require('./math')//using destructuring instead of using math object
/*const os = require('os');

console.log(os.version())
console.log(add(2,1))
console.log(subtract(2,1))
console.log(multiply(2,1))
console.log(divide(2,1))*/

const logEvents = require('./logEvents')

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {};

//initialize object
const myEmitter = new MyEmitter();

//add listener for the lof event 
myEmitter.on('log',(msg)=>{
    logEvents(msg)
})

setTimeout(()=>{
    myEmitter.emit('log','log event emitted')
},2000)