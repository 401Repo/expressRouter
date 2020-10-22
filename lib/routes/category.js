'use strict';

const express = require('express');

const categoryRouter = express.Router();

const { getAll, getOne, createOne, updateOne, deleteOne } = require('../controllers/categoryController.js');

categoryRouter.get('/', getAll);
categoryRouter.get('/:id', getOne);
categoryRouter.post('/', createOne);
categoryRouter.put('/:id', updateOne);
categoryRouter.patch('/:id');
categoryRouter.delete('/:id', deleteOne);

module.exports = categoryRouter;
