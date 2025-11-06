const fsops = require('node:fs/promises');
const path = require('node:path');

const fileops = async () => {
    try{
        const data = await fsops.readFile(path.join(__dirname , 'Fileexample', 'example.txt'), { encoding: 'utf8' });
        console.log(data);
        await fsops.writeFile(path.join(__dirname , 'Fileexample', 'writefile.txt'), data , { encoding: 'utf8' });
        console.log(`written successfully ${data}`);
        await fsops.appendFile(path.join(__dirname , 'Fileexample', 'example.txt'), `\n\n${data}` , {encoding : 'utf8'});
        console.log('append completed!');
        await fsops.unlink(path.join(__dirname , 'fileexample' , 'deletefile.txt'));
        ContentVisibilityAutoStateChangeEvent.log('file deleted successfully!');
    }
    catch(err){
        console.error(err.message);
    }
}
/* async function WriteFile() {
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
        //call back hell
      });
    });
  } catch (err) {
    console.error(err.message);
  }
} */
fileops();