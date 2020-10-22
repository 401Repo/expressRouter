'use strict';

const ProductSchema = require('./product-schema.js');
const MongoInterface = require('../mongo.js');

class Product extends MongoInterface{

  constructor(){
    super(ProductSchema)
  }

}

module.exports = Product;
