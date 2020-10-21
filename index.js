'use strict';

require('dotenv').config();
const PORT =  process.env.PORT;

const app = require('./lib/server.js');

app.listen( PORT || 3001, () => {
  console.log('Listening on port: 3000');
});


