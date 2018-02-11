var mongoose = require('mongoose')
var artSchema = new mongoose.Schema({
  id: {type:Number, required:true},
  name: {type:String, trim:true, lowercase:true, required:true, default:''},
  imagePath: {type:String, trim:true, lowercase:true, required:true, default:''},
  galleryName: {type:String, trim:true, lowercase:true, required:true, default:''},
  galleryId: {type:Number, trim:true, required:true, default:''},
  coverPhoto: {type:String, trim:true, lowercase:true, required:true,},
  dimensions: {type:String, trim:true, lowercase:true, required:true, default:''},
  description: {type:String, trim:true, lowercase:true, required:true, default:''},
  forSale: {type:String, trim:true, lowercase:true, required:true,},
  price: {type:Number, trim:true, default:''},
  order: {type:Number, trim:true, required:true, default:''}
})

module.exports = mongoose.model('artSchema', artSchema)
