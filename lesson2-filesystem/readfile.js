const { readFile } = require('node:fs/promises');
const path = require('node:path');
async function logFile() {
  try {
    const filePath = path.join(__dirname , 'Fileexample', 'example.txt');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}
logFile();