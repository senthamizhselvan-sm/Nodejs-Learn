/* console.log("Server running on port 3000"); */
//console.log(global);

/* const os = require('os'); */

 /* console.log(os.type())
console.log(os.version())
console.log(os.homedir()) */

/* console.log(__dirname)
console.log(__filename) */

/* const path = require('path')
console.log(path.dirname(__filename))
console.log(path.parse(__filename))
 */

/* const math = require('./math') */
//const {add,subtract,multiply,Division} = require('./math')
/* console.log(math.add(4,5,2,7,2,8,1,99,88))
console.log(math.subtract(4,5,2,7,2,8,1,99,88))
console.log(math.multiply(4,5,2,7,2,8,1,99,88))
console.log(math.Division(4,5,2,7,2,8,1,99,88))
 */

const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type' : 'text\html'});
    fs.readFile('index.html' , (err , data) =>{
        if(err){
            res.writeHead(404);
            res.write('Error : file not found');
        }
        else{
            res.write(data);
        }
        res.end();
    })
})

server.listen(PORT ,(error) =>{
    if(error){
        console.error(error.message);
    }
    else{
        console.log('server is running on port '+ PORT);
    }
})