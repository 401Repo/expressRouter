'use strict';

console.log('in model finder');

const categoryCollection = require('../models/categories/categoriesCollection.js');

const categoryModelFinder = {};
const schema = new categoryCollection();

categoryModelFinder.createOneCategory = async (req, res, next) => {

  if(req.body.name){

    let newRecord = await schema.post(req.body);
    res.status(201).json(newRecord);
    
  } else {
    next('post not working');
  };

};

categoryModelFinder.getAllCategories = async (req, res, next) => {

  let allData = await schema.get()
  res.status(200).json(allData);
  
};

categoryModelFinder.getOneCategoryById = async (req, res, next) => {

  let id = req.params.id;
  let singleRecord = await schema.get(id);
  res.status(200).json(singleRecord);
  
};

categoryModelFinder.updateOneCategoryById = async (req, res, next) => {

  let id = req.params.id;
  let recordToUpdate = req.body;
  let updatedRecord = await schema.put(id, recordToUpdate);
  res.status(201).json(updatedRecord);
  
};

categoryModelFinder.deleteOneCategoryById = async (req, res, next) => {

  let id = req.params.id;
  let deletedRecord = await schema.delete(id);
  res.status(200).json({});
  
};

module.exports = categoryModelFinder;