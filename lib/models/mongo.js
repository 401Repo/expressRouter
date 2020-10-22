'use strict';

// this software will consume a mongoose schema
// and ensure that proper mongoose methods are run when we want to do controller layer operations

class Mongo {

  constructor(schema) {
    this.schema = schema;
  }

  read(id) {
    if (id) {
      return this.schema.find({ _id: id });
    } else {
      return this.schema.find({});
    }
  }

  create(productObject) {
    const newProduct = new this.schema(productObject);
    return newProduct.save();
  }

  update(id, newVal) {
    return this.schema.findOneAndUpdate({_id:id}, {$set:newVal}, {new:true});
  }

  delete(id) {
    // return this.schema.findOneIdAndDelete({_id:id});
    return this.schema.findOneAndDelete({_id:id});
  }
}

module.exports = Mongo;

