'use strict';

const supergoose = require('@code-fellows/supergoose');
const product = require('../lib/routes/product.js');

const testServer = supergoose(product);

describe('tests the product controller and data layer', () => {

  it('should return a new product on POST /user', () => {

    return testServer.post('/product')
      .send({"name": "Candy" })
      .then(res => {
        expect(res.body.name).toStrictEqual('Candy');
      })
  });

  it('should return a new product on POST /user', () => {

    return testServer.post('/product')
      .send({"name": "Candy" })
      .then(res => {
        expect(res.body.name).toStrictEqual('Candy');
      })
  });

  it('should return a new product on POST /user', () => {

    return testServer.post('/product')
      .send({"name": "Candy" })
      .then(res => {
        expect(res.body.name).toStrictEqual('Candy');
      })
  });
});
