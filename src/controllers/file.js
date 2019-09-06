const fs  = require('fs');

const fileName = 'answer.json';

module.exports = {

    create(content){
        fs.writeFile(fileName, content, function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    },

    async load(){
        try {        
            let jsonData = await JSON.parse(fs.readFileSync("./"+fileName, 'utf-8'));
            //console.log(jsonData);
            return jsonData;
        } catch (error) {
            console.error(error);
            return null;
        }
        
    }
};