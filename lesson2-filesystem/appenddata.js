import { appendFile } from 'node:fs';
const path = require('node:path');

appendFile(path.join(__dirname , 'Fileexample', 'appenddata.txt'), 'hello world', (err) => {
  if (err) throw err;
  console.log('The "hello world" was appended to file!');
});