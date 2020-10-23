'use strict';

const express = require('express');

const productRouter = express.Router();

const { getAll, getOne, createOne, updateOne, deleteOne } = require('../controllers/productController.js');

productRouter.get('/', getAll);
productRouter.get('/:id', getOne);
productRouter.post('/', createOne);
productRouter.put('/:id', updateOne);
productRouter.patch('/:id');
productRouter.delete('/:id', deleteOne);



module.exports = productRouter;


