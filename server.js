import {express } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';



connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true});

const app = express();

app.use(express.json());

app.use(cors());

//iniciando db

app.use('/api', require('./src/routes'));

app.listen(3000);