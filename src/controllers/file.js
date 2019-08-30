const fs  = require('fs');

module.exports = {
    
    create(name, content){
        fs.writeFile(name, content, function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    }
};