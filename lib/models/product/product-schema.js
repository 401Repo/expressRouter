'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: false },
  inStock: { type: Number, required: false }
});

module.exports = mongoose.model('product', product);