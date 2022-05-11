console.clear()
console.log('--------------------------');
import express from 'express';
import route from "./routes/routes.js";
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoConnect from './models/dbconfig.js'
const app = express();

mongoConnect();

app.use(express.json())
app.set('view engine', 'ejs'); 
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use(express.static("public"));

app.use('/', route);


app.listen(8000, () => console.log('Server started: 8000'));

