'use strict';

const mongoose = require('mongoose');

const categorySchema =new mongoose.Schema({

  name: {type: String, required: false},
  description: {type: String, required:false},
  inventory: {type: Number, required:false},

});

module.exports = mongoose.model('Category', categorySchema);

