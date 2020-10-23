'use strict';

//////
//////Change from two routers to one router using middleware model finder.
//////

// dependencies

const express = require('express');
const app = express();

// error pages and logger

const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500');
const loggingMiddleware = require('./middleware/logger.js');
const timeStamp = require('./middleware/timeStamp.js');


// express specific
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(loggingMiddleware);
app.use(timeStamp);

// routes

const oneRouter = require('./api/v1.js'); // mongoDB storage
app.use('/api/v1', oneRouter); // mongoDB storage

// must replace by only one

// const productRouter = require('./routes/product.js');
// const categoryRouter = require('./routes/category.js');

// app.use('/product', productRouter);
// app.use('/category', categoryRouter);


// ERROR PAGES


app.use(notFound);
app.use('*', serverError);
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







