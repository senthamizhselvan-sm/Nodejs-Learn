const { writeFile } = require('node:fs/promises');
const { appendFile } = require('node:fs');
const {rename} = require('node:fs');

const path = require('node:path');
async function WriteFile() {
  try {
    const filePath = (path.join(__dirname , 'Fileexample', 'writefile.txt'));
    await writeFile(filePath, 'Hello World', { encoding: 'utf8' });
    console.log(`written successfully`);
    appendFile(path.join(__dirname , 'Fileexample', 'writefile.txt'), '\nhello world', (err) => {
      if (err) throw err;
      console.log('append completed!');
      rename(path.join(__dirname , 'Fileexample', 'writefile.txt'), path.join(__dirname , 'Fileexample', 'afterwritefile.txt'), (err) => {
        if (err) throw err;
        console.log('rename completed!');
      });
    });
  } catch (err) {
    console.error(err.message);
  }
}
WriteFile();