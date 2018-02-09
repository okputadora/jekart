var mongoose = require('mongoose')
var artSchema = new mongoose.Schema({
  name: {type:String, trim:true, lowercase:true, required:true, default:''},
  path: {type:String, trim:true, lowercase:true, required:true, default:''},
  galleryName: {type:String, trim:true, lowercase:true, required:true, default:''},
  galleryId: {type:Number, trim:true, required:true, default:''},
  coverPhoto: {type:String, trim:true, lowercase:true, required:true, default: NULL},
  dimensions: {type:String, trim:true, lowercase:true, required:true, default:''},
  description: {type:String, trim:true, lowercase:true, required:true, default:''},
  forSale: {type:String, trim:true, lowercase:true, required:true, default:NULL},
  price: {type:Number, trim:true, default:''},
  order: {type:Number, trim:true, required:true, default:''}
})

module.exports = mongoose.model('artSchema', artSchema)
