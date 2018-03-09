var mongoose = require('mongoose')
var shopSchema = new mongoose.Schema({
  name: {type:String, trim:true, lowercase:true, default:''},
  framed: {type:String, trim:true, lowercase:true, default:'no'},
  dimensions: {type:String, trim:true, lowercase:true, default:''},
  description: {type:String, trim:true, lowercase:true, default:''},
  price: {type:String, lowercase:true, trim:true, default:''},
  galleryName: {type:String, trim:true, lowercase:true, default:''},
  date: {type:String, trim:true, lowercase:true, default:''},
  image1: {type:String, trim:true, lowercase:true, default:''},
  image2: {type:String, trim:true, lowercase:true, default:''},
})

module.exports = mongoose.model('shopSchema', shopSchema)
