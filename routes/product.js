'use strict';

const express = require('express');

const productRouter = express.Router();

// Create
productRouter.post('/', (req, res) => {
  res.send('Save product');
});

// Read
productRouter.get('/', (req, res) => {
  res.send('Search all products');
});

// Update
productRouter.put('/', (req, res) => {
  res.send('Update product');
});

// Delete
productRouter.delete('/', (req, res) => {
  res.send('Delete product');
});

module.exports = productRouter;
