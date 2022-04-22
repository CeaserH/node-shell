 const fs = require("fs");

module.exports = function (fileName) {
     //fs has a function to read files.
     fs.readFile(fileName, 'utf8', (err, data) => {
        if (err){
            throw err;
        }else{
            console.log(data);    
            process.stdout.write('\nprompt > ');
        }
     }
)}