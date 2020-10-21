'use strict';

// server.js

const express = require('express');
const app = express();
const userRouter = require('../routes/user.js');
const productRouter = require('../routes/product.js');
const categoryRouter = require('../routes/category.js');
const loggingMiddleware = require('../middleware/logger.js');
const timeStamp = require('../middleware/timeStamp.js');

app.use(express.json());
app.use(loggingMiddleware);
app.use(timeStamp);

app.use('/user', loggingMiddleware, userRouter);

app.use('/product', productRouter);

app.use('/category', categoryRouter);

app.get('/', loggingMiddleware, (req, resp) => {
  resp.send('you just ran GET on /');
});

module.exports = app;
