"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cors = require('cors');

var app = (0, _express["default"])(); //app.use(express.json());
//app.use(cors());
//iniciando db

app.use('/api', require('./src/routes'));
app.listen(3000);
