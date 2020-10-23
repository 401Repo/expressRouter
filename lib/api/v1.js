'use strict';

//Duck by Joan Stark
//                 ,-.
//         ,      ( {o\
//         {`"=,___) (`~
//          \  ,_.-   )
//jgs  ~^~^~^`- ~^ ~^ '~^~^~^~
//         I need Middleware to find my cat and product model finders
// ..........I dont care about patch..........
//
const productModelFinder = require('../middleware/product-model-finder.js');
const categoryModelFinder = require('../middleware/category-model-finder.js');
const express = require('express');
const oneRouter = express.Router();

// categories:

oneRouter.post('/categories', categoryModelFinder.createOneCategory);

oneRouter.get('/categories', categoryModelFinder.getAllCategories);

oneRouter.get('/categories/:id', categoryModelFinder.getOneCategoryById);

oneRouter.put('/categories/:id', categoryModelFinder.updateOneCategoryById);

oneRouter.delete('/categories/:id', categoryModelFinder.deleteOneCategoryById);

// products

oneRouter.post('/products', productModelFinder.createOneProduct);

oneRouter.get('/products', productModelFinder.getAllProducts);

oneRouter.get('/products/:id', productModelFinder.getOneProductById);

oneRouter.put('/products/:id', productModelFinder.updateOneProductById);

oneRouter.delete('/products/:id', productModelFinder.deleteOneProductById);

module.exports = oneRouter;
