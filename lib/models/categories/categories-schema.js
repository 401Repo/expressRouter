'use strict';

const mongoose = require('mongoose');

const category = mongoose.Schema({
  name: { type: String, required: false },
  display_name: { type: String, required: false },
  description: { type: String, required: false}
});

module.exports = mongoose.model('category', category);
