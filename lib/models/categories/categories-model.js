'use strict';

const CategorySchema = require('./categories-schema.js');
const MongoInterface = require('../mongo.js');

class Category extends MongoInterface{

  constructor(){
    super(CategorySchema)
  }

}

module.exports = Category;
