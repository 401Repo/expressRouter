'use strict';
//products collection
const ProductModel = require('../models/product/product-model.js');

const ProductInterface = new ProductModel();

module.exports = {
  getOne: function (req, res, next) {

    try {

      const userId = req.params.id;
      ProductInterface.read(userId)
        .then(user => res.send(user))
        .catch(err => next(err));

    } catch (err) {

      next(err);

    }
  },

  getAll: function (req, res) {

    ProductInterface.read()
      .then(product => {
        res.send(product);
      });

    // res.send(users);
  },

  createOne: function (req, res, next) {

    try {

      const productFromRequest = req.body;
      ProductInterface.create(productFromRequest)
        .then(product => res.send(product))
        .catch(err => next(err));

    } catch (err) {

      next(err);

    }

  },

  updateOne: function (req, res, next) {
    try {
    // console.log('are we here?');
      const userId = req.params.id;
      ProductInterface.update(userId, req.body)
        .then(user => res.send(user))
        .catch(err => next(err));

    } catch (err) {

      next(err);

    }
  },

  replaceOne: function () {

  },

  deleteOne: function (req, res, next) {
    try {
    // console.log('are we here?');
      const userId = req.params.id;
      ProductInterface.delete(userId)
        .then(user => res.send(user))
        .catch(err => next(err));

    } catch (err) {

      next(err);

    }
  },


}
