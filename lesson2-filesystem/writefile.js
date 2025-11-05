const { writeFile } = require('node:fs/promises');
const { resolve } = require('node:path');
const path = require('node:path');
async function WriteFile() {
  try {
    const filePath = resolve(path.join(__dirname , 'Fileexample', 'writefile.txt'));
    await writeFile(filePath, 'Hello World', { encoding: 'utf8' });
    console.log(`file written successfully`);
  } catch (err) {
    console.error(err.message);
  }
}
WriteFile();