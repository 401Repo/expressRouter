'use strict';

require('dotenv').config();
const PORT =  process.env.PORT;

const server = require('./lib/server.js');
const mongoose = require('mongoose');

const mongoLink = process.env.mongoLink;

mongoose.connect(mongoLink, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

server.start(PORT);

