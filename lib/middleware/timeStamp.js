'use strict';

let time = Date.now();

function timeStamp(req, resp, next) {
  console.log(time);
  console.log(`Time request was made: ${time}`);
  next();
}

module.exports = timeStamp;