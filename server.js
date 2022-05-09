import express from 'express';
import dbconfig from './models/dbconfig.js'
import meublesController from './controllers/meublesController.js'
const app = express();

app.use('/', meublesController)

app.listen(8000, () => console.log('Server started: 8000'));