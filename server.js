const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');

const connectMongoDB = require('./configuration/mongodb.js');

dotenv.config({ path: './env'})
connectMongoDB()

const app = express();
app.use(express.json());

if(process.env.MODE === 'development') {
    app.use(morgan('dev'));
}
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('CRUD API is running')
})

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow));
