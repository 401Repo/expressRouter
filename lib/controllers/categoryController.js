'use strict';

const CategoryModel = require('../models/categories/categories-model.js');

const CategoryInterface = new CategoryModel();

// router.use('/users');
// const users = [];

module.exports = {
  getOne: function (req, res, next) {

    try {

      const userId = req.params.id;
      CategoryInterface.read(userId)
        .then(user => res.send(user))
        .catch(err => next(err));

    } catch (err) {

      next(err);

    }
  },

  getAll: function (req, res) {

    CategoryInterface.read()
      .then(product => {
        res.send(product);
      });

    // res.send(users);
  },

  createOne: function (req, res, next) {

    try {

      const productFromRequest = req.body;
      CategoryInterface.create(productFromRequest)
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
      CategoryInterface.update(userId, req.body)
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
      CategoryInterface.delete(userId)
        .then(user => res.send(user))
        .catch(err => next(err));

    } catch (err) {

      next(err);

    }
  },


}
