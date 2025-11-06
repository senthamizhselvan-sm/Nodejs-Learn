const fs = require('node:fs');


if(!fs.existsSync('./new')){
    //rmdir to delete directory
    fs.mkdir('./new' , (err) => {
    try{
        if(err) throw err;
        console.log('directory created!');
    }
    catch(err){
        console.error(err.message);
    }
})
}

  
