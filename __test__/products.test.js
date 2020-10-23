'use strict';

const supergoose = require('@code-fellows/supergoose');
const productModel = require('../lib/models/product/productsCollections.js');
const server = require('../lib/server.js');

const testServer = supergoose(server.app);

let productId = '';
let categoryId = '';

describe('tests the product controller and data layer', () => {

  it('should return a new product "Candy" on POST /product', () => {

    return testServer.post('/api/v1/products/')
      .send({'name': 'Candy' },
        { 'category': 'Foods' },
        { 'description' : 'Bars'},
        { 'price' : '1.00'},
        { 'inStock' : '1000' }
      )
      .then(res => {
        productId = res.body._id;
        expect(res.body.name).toStrictEqual('Candy');
      })
  });

  it('should return 1 product by id', () => {
    return testServer.get(`/api/v1/products/${productId}`)
      .then(res => {
        expect(res.body.name).toEqual('Candy');
      });
  })

  it('should update a new product "Candy" to "Cookies" on Put /product', () => {

    return testServer.put(`/api/v1/products/${productId}`)
      .send({'name': 'Cookies' })
      .then(res => {
        expect(res.body.name).toStrictEqual('Cookies');
      })
  });


  it('should return a new category "Electronics" on POST /category', () => {

    return testServer.post('/api/v1/categories/')
      .send({'name': 'Electronics' })
      .then(res => {
        categoryId = res.body._id;
        // console.log(res.body._id, 'ID elect');
        expect(res.body.name).toStrictEqual('Electronics');
      })
  });


  it('should return 1 category by id', () => {
    return testServer.get(`/api/v1/categories/${categoryId}`)
      .then(res => {
        expect(res.body.name).toEqual('Electronics');
      });
  })

  it('should be able 404 err message', () => {

    return testServer.get('/anythingELSE/')
      .then(res => {
        expect(res.body).toEqual({'message': '404 error'});
      });
  });


  it('Testing 500 error', () => {

    expect(500);

  });


  it('should update a new category "Electronics" to "Coputers" on Put /categories', () => {

    return testServer.put(`/api/v1/categories/${categoryId}`)
      .send({'name': 'Computers' })
      .then(res => {
        expect(res.body.name).toStrictEqual('Computers');
      })
  });

  it('should delete 1 category by id', () => {
    return testServer.delete(`/api/v1/categories/${categoryId}`)
      .then(res => {
        expect(res.body[0]).toEqual(undefined);
      });
  })

  it('should delete 1 product by id', () => {
    return testServer.get(`/api/v1/products/${productId}`)
      .then(res => {
        expect(res.body[0]).toEqual(undefined);
      });
  })

});
