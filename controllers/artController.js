var art = require('../models/art')
var Promise = require('bluebird')

module.exports = {
  // create a new gallery
  get: function(){
    return new Promise(function(resolve, reject){
      art.find({galleryName: 'bedlam cups'}, function(err, result){
        if (err){
          reject(err)
          return
        }
        resolve(result)
      })
    })
  },
  getByGallery: function(galleryName){
    console.log("getting from within the controller")
    console.log(galleryName)
    return new Promise(function(resolve, reject){
      art.collection.find(galleryName, function(err, result){
        if (err){
          console.log("getting an error")
          reject(err)
          return
        }
        console.log(result)
        resolve(result)
        return
      })
    })
  }
}
