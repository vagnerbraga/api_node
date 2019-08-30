const { Router }  = require('express');

const { create } = require('./controllers/file');

const routes = Router();

routes.get("/", (req,res)=>{


    create("vanger", "vanger vagner vanger vagner vanger vagner");

});

module.exports = routes;