import express from 'express';
import dbconfig from './models/dbconfig.js'
import meublesController from './controllers/meublesController.js'
import bodyParser from 'body-parser';
const app = express();

//permet d'utiliser req.body
app.use( bodyParser.json() );

app.use('/meubles', meublesController);

app.listen(8000, () => console.log('Server started: 8000'));