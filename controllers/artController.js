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
    return new Promise(function(resolve, reject){
      Art.find(param, function(err, art) {
        if (err){
          reject(err)
          return
        }
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
