import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import * as path from 'path';
import connectMongoDB from './configuration/mongodb.js';

const PORT = process.env.PORT || 8000;

dotenv.config({ path: './env'})
connectMongoDB()

const app = express();
app.use(express.json());

if(process.env.MODE === 'development') {
    app.use(morgan('dev'));
}

app.get('/', (req, res) => {
    res.send('CRUD API is running')
})

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow))