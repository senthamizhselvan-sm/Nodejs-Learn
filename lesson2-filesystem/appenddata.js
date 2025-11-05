import { appendFile } from 'node:fs';

appendFile('./Fileexample/appenddata.txt', 'hello world', (err) => {
  if (err) throw err;
  console.log('The "hello world" was appended to file!');
});