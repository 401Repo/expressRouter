'use strict';

// dependencies

const express = require('express');
const app = express();

// error pages and logger

const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500');
const loggingMiddleware = require('./middleware/logger.js');
const timeStamp = require('./middleware/timeStamp.js');


// midleware needed?  will ask
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use(loggingMiddleware);
app.use(timeStamp);

// routes
console.log('Before mongo');
const oneRouter = require('./api/v1.js'); // mongoDB storage

app.use('/api/v1', oneRouter); // mongoDB storage

// const productRouter = require('./routes/product.js');
// // only one 
// const categoryRouter = require('./routes/category.js');

// app.use('/product', productRouter);


// app.use('/category', categoryRouter);


// ERROR PAGES

app.use(serverError);
app.use(notFound);

// app.get('/', loggingMiddleware, (req, resp) => {
//   resp.send('you just ran GET on /');
// });

function start(PORT){
  app.listen(PORT, () => console.log('Listening on: ', PORT))
}

module.exports = {
  start: start,

  app
}







