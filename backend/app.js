import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import controllers from './routes/routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'victorfisiofit'
});

app.use('/', controllers);

app.listen(port, () => {
    console.log('Servidor iniciado en puerto ' + port)
})