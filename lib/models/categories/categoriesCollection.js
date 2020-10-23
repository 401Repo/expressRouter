'use strict';

const schema = require('./categories-schema');

class categoryModel {
// Crud categories

  get(id){
    if(!id){
      return schema.find({});
    } else {
      return schema.findById(id);
    };
  };

  async post(newRecord){
    let record = await new schema(newRecord);
    return record.save();
  };

  put(id, record){
    return schema.findByIdAndUpdate(id, record, {new: true})
  };

  delete(id){
    return schema.findByIdAndDelete(id);
  };

};

module.exports = categoryModel;
