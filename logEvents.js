const {format} = require('date-fns');
const {v4 : uuid} = require('uuid');
const fs = require('node:fs');
const fspromises = require('node:fs/promises');
const path = require('node:path');

const logEvents = async (message) => {
    const dateTime = `${format(new Date() , "yyyy-MM-dd \t HH:mm:ss") }`;
    const logItems = `${dateTime} \t ${uuid()} \t ${message}`;
    console.log(logItems);
    try{
        if(!fs.existsSync(path.join(__dirname , 'logfiles'))){
            await fspromises.mkdir(path.join(__dirname , 'logfiles'));
        }
        await fspromises.appendFile(path.join(__dirname , 'logfiles' , 'eventlog.txt') , logItems + '\n');
    }
    catch(err){
        console.error(err.message);
    }
}

module.exports = logEvents;