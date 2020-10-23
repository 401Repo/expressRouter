'use strict';

const supergoose = require('@code-fellows/supergoose');
const Product = require('../lib/models/product/product-model.js');
const server = require('../lib/server.js');

const testServer = supergoose(server.app);

let productId = '';
let categoryId = '';

describe('tests the product controller and data layer', () => {

  it('should return a new product "Candy" on POST /product', () => {

    return testServer.post('/product')
      .send({'name': 'Candy' })
      .then(res => {
        productId = res.body._id;
        expect(res.body.name).toStrictEqual('Candy');
      })
  });

  it('should return a new category "Electronics" on POST /category', () => {

    return testServer.post('/category')
      .send({'name': 'Electronics' })
      .then(res => {
        categoryId = res.body._id;
        console.log(res.body._id, 'ID elect');
        expect(res.body.name).toStrictEqual('Electronics');
      })
  });

  it('should be able to handle a GET against /product 500 err', () => {

    return testServer.get('/user')
      .then(res => {
        expect(res.body).toEqual({'error': 'not found'});
      });
  });
  it('should be able to handle a GET against /user', () => {

    return testServer.get('/product')
      .then(res => {
        expect(res.body).toEqual(res.body);
      });
  });

  it('should create a new category', () => {
    return testServer.post('/category')
      .send({ name: 'Somename' })
      .then(res => {
        expect(res.body.name).toEqual('Somename');
      });
  });

  it('should return 1 product by id', () => {
    return testServer.get(`/product/${productId}`)
      .then(res => {
        expect(res.body[0].name).toEqual('Candy');
      });
  })

  it('should return 1 category by id', () => {
    return testServer.get(`/category/${categoryId}`)
      .then(res => {
        expect(res.body[0].name).toEqual('Electronics');
      });
  })

  it('should update a new product "Candy" to "Cookies" on Put /product', () => {

    return testServer.put(`/product/${productId}`)
      .send({'name': 'Cookies' })
      .then(res => {
        expect(res.body.name).toStrictEqual('Cookies');
      })
  });

  it('should update a new product "Candy" to "Cookies" on Put /product', () => {

    return testServer.put(`/category/${categoryId}`)
      .send({'name': 'Computers' })
      .then(res => {
        expect(res.body.name).toStrictEqual('Computers');
      })
  });

  it('should delete 1 category by id', () => {
    return testServer.delete(`/category/${categoryId}`)
      .then(res => {
        expect(res.body[0]).toEqual(undefined);
      });
  })

  it('should delete 1 product by id', () => {
    return testServer.get(`/category/${productId}`)
      .then(res => {
        expect(res.body[0]).toEqual(undefined);
      });
  })

  it('Testing my 500 error', () => {

    return testServer.get(`/category/fff`)
      .send({})
      .expect(500);
  });

  it('Testing my 404 error', () => {
    return testServer.get(``)
      .expect(404);
  });

});
