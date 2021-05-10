const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/error');

app.use(express.json());

//Import all the routes

const products = require('./routes/product');

app.use('/api/v1/', products);


//middle ware to handle errors

app.use(errorMiddleware);

module.exports = app;