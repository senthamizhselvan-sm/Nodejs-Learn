//nodemon execute continuosly without interuption

/* console.log("nodemon testing!");
console.log("make new changes");
 */
/* const {format} = require('date-fns');
const {v4 : uuid} = require('uuid');

console.log(format(new Date() , "yyyy-MM-dd \t HH:mm:ss"));
console.log(uuid());
 */

const logEvents = require('./logEvents');

const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  logEvents(msg);
});
myEmitter.emit('log', 'Log message');