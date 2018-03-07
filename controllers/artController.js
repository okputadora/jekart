var Art = require('../models/art')
var Promise = require('bluebird')


module.exports = {
  // create a new gallery
  get: function(){
    console.log("we're in here")
    return new Promise(function(resolve, reject){
      Art.find(function(err, result) {
        if (err) {
          reject(err)
          return;
        }
        resolve(result);
      })
    })
  },
  getByParam: function(param){
    console.log("getting from within the controller")
    console.log(param)
    console.log(typeof(param.galleryName))
    return new Promise(function(resolve, reject){
      Art.find(param, null, function(err, art) {
        console.log("found")
        if (err){
          console.log("ERROR")
          console.log(err)
          reject(err)
          return
        }
        console.log(art)
        resolve(art);
      })
    })
  },

  post: function(params){
    return new Promise(function(resolve, reject){
      Art.create(params, function(err, art){
        if (err){
          reject(err)
          return
        }
        resolve(art)
        return
      })

    })
  }
}
