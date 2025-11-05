const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
async function logFile() {
  try {
    const filePath = resolve('./Fileexample/example.txt');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents.toString());
  } catch (err) {
    console.error(err.message);
  }
}
logFile();