const { Router }  = require('express');

const { getContent, send } = require('./controllers/request');

const { load, create } = require('./controllers/file');

const { decrypt, myDecrypt } = require('./controllers/criptografia');

const  sha1  = require('sha1');

const routes = Router();

routes.get("/desafio", (req,res)=>{

    load().then((data)=>{

        if(data){

            let strDecryted = myDecrypt(data['numero_casas'], data['cifrado']);

            data['decifrado'] = strDecryted;
            data['resumo_criptografico'] = sha1(strDecryted);

            create(JSON.stringify(data));

            res.json(data);
        }else{
            res.send(500);
        } 
    });

});

routes.get("/content", (req,res)=>{

    if(getContent()){
        res.send(200);
    }else{
        res.send(500);
    }

});

routes.get("/send", (req,res)=>{

   send().then((data)=>{
       if(data){
            console.log(data);
            res.json(data);
        }else{
           console.error("Erro");
       }
   });

});


module.exports = routes;