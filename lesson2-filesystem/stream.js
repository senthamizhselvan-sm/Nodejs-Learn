const fs = require('node:fs');
const path = require('node:path');

const rf = fs.createReadStream(path.join(__dirname , 'fileexample' , 'bigdata.txt' ), {encoding : 'utf8'});
const wf = fs.createWriteStream(path.join(__dirname , 'fileexample' , 'bigdatawrite.txt' ));

/* rf.on('data' ,(chunks) =>{
    wf.write(chunks);
}) */

rf.pipe(wf);