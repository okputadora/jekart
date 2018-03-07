var Art = require('../models/art')
var Promise = require('bluebird')
var mongoose = require('mongoose')


module.exports = {
  // create a new gallery
  get: function(){
    return new Promise(function(resolve, reject){
      MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        var dbo = db.db("jekart");
        dbo.collection("art").find({}).toArray(function(err, result) {
          if (err) reject(err);
          resolve(result);
          db.close();
        });
      })
    })
  },
  getByParam: function(param){
    console.log("getting from within the controller")
    console.log(param)
    return new Promise(function(resolve, reject){
      MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        var dbo = db.db("jekart");
        dbo.collection("art").find(param).sort({order: 1}).toArray(function(err, result) {
          if (err) reject(err);
          resolve(result);
          db.close();
        });
      })
    })
  },

  post: function(params){
    console.log(params)
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
