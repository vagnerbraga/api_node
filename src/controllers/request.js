const axios = require('axios');
const formData = require('form-data');
const fs = require('fs');
const axiosFileupload = require('axios-fileupload');
const  { create, fileName }  = require('./file');

const url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=';
//const token = '67bdb43939de841765f337f4a008759e0f637da6';
const token = '67bdb43939de841765f337f4a008759e0f637da6';

module.exports = {
        
    async getContent(){

        try {
        
            const response = await axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=67bdb43939de841765f337f4a008759e0f637da6');  

            const result = response.data;

            console.log(JSON.stringify(response.data));

            create(JSON.stringify(result));

            return true;
        } catch (error) {
            return false;
           console.error(error);
        }        
    },
    async send(){

        try {
            let url = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token='+token;
            let form = new formData();
            form.append('answer', await fs.createReadStream('./answer.json'));
            let request = await axios.create({
                headers: form.getHeaders()
            }).post(url, form);
            return request.data;
        } catch (error) {
            console.error(error);
        }
    }
};