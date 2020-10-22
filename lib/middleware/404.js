'use strict';

module.exports = (req, resp, next)=>{

  let output = {
    error: 'not found'
  };
  resp.status(404).json(output);
}

