var Shop = require('../models/shop')
var Promise = require('bluebird')

module.exports = {
  // create a new gallery
  get: function(){
    return new Promise(function(resolve, reject){
      Shop.find(function(err, result) {
        if (err) {
          reject(err)
          return;
        }
        resolve(result);
      })
    })
  },
  getByParam: function(param){
    return new Promise(function(resolve, reject){
      Shop.find(param, null, function(err, item) {
        if (err){
          reject(err)
          return
        }
        resolve(item);
      })
    })
  },

  post: function(params){
    return new Promise(function(resolve, reject){
      Shop.create(params, function(err, item){
        if (err){
          reject(err)
          return
        }
        resolve(item)
        return
      })

    })
  }
}
