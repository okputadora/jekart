var mongoose = require('mongoose')
var artSchema = new mongoose.Schema({
  name: {type:String, trim:true, lowercase:true, default:''},
  imagePath: {type:String, trim:true, lowercase:true, default:''},
  galleryName: {type:String, trim:true, lowercase:true, default:''},
  galleryId: {type:Number, trim:true, default:''},
  coverPhoto: {type:String, trim:true, lowercase:true, default:null},
  dimensions: {type:String, trim:true, lowercase:true, default:''},
  description: {type:String, trim:true, lowercase:true, default:''},
  forSale: {type:String, trim:true, lowercase:true, default:null},
  price: {type:String, lowercase:true, trim:true, default:''},
  order: {type:Number, trim:true, default:''}
})

module.exports = mongoose.model('artSchema', artSchema)
