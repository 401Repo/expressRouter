'use strict';

// class example, dont delete, from oct 18 vid - not using it but dont get rid of it

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

