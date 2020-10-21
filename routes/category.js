'use strict';

const express = require('express');

const categoryRouter = express.Router();


// Create
categoryRouter.post('/', (req, res) => {
  res.send('Save category');
});

// Read
categoryRouter.get('/', (req, res) => {
  res.send('Search all categories');
});

// Update
categoryRouter.put('/', (req, res) => {
  res.send('Update category');
});

// Delete
categoryRouter.delete('/', (req, res) => {
  res.send('Delete category');
});

module.exports = categoryRouter;
