'use strict';

// console.log('in model finder');

const productsCollection = require('../models/product/productsCollections.js')

const productModelFinder = {};
const schema = new productsCollection();

productModelFinder.createOneProduct = async (req, res, next) => {

  if( req.body.name){

    let newRecord = await schema.post(req.body);
    res.status(201).json(newRecord);

  }
  else {

    next('post not working');

  };

};

productModelFinder.getAllProducts = async (req, res, next) => {

  let allData = await schema.get();
  res.status(200).json(allData);
  
};

productModelFinder.getOneProductById = async (req, res, next) => {
  
  let id = req.params.id;
  let singleRecord = await schema.get(id);
  res.status(200).json(singleRecord);

};

productModelFinder.updateOneProductById = async (req, res, next) => {

  let id = req.params.id;
  let recordToUpdate = req.body;
  let updatedRecord = await schema.put(id, recordToUpdate);
  res.status(201).json(updatedRecord);
  
};

productModelFinder.deleteOneProductById = async (req, res, next) => {
  
  let id = req.params.id;
  let deletedRecord = await schema.delete(id);
  res.status(200).json({});

};

module.exports = productModelFinder;