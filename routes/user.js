'use strict';

const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('Search all users');
});

userRouter.post('/', (req, res) => {
  res.send('Save user');
});



module.exports = userRouter;
