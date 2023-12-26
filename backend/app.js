import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vitorfisiofit'
});

app.listen(port, () => {
    console.log('Servidor iniciado en puerto ' + port)
})