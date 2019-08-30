import  express  from 'express';

const cors = require('cors');

const app = express();

//app.use(express.json());

//app.use(cors());

//iniciando db

app.use('/api', require('./src/routes'));

app.listen(3000);