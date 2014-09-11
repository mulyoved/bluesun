'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});


var mongoosePaginate = require('mongoose-paginate');
ThingSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Thing', ThingSchema);