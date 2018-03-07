
// it seems like we're not actually using the api route to separate our
// concerns. shouldn't the api be handling not just the admins request for data
// but the users as well? but then what is the index route for? I thought it was
// for sending all of the pages to the user? Obviously I don't understand how
// different routes are supposed to be employed
var express = require('express');
var controllers = require('../controllers/')
var router = express.Router();

var galleries = [
  {name:'2017-2018', imagePath: 'bluemoon.png'},
  {name:'bedlam cups', imagePath: 'focalpoints.png'},
  {name:'scribble faces', imagePath: 'napkinfaces.png'},
  {name:'window', imagePath: 'windowdrip.png'},
  {name:'wood blocks', imagePath: 'thirdfloor.png'},
  {name:'deep resin', imagePath: 'resinman.png'},
  {name:'wood burning', imagePath: 'woodwinter.png'},
  {name:'degradation sets', imagePath: 'ds.png'},
  {name:'2016', imagePath: 'nobody.png'},
  {name:'2014-2015', imagePath: 'spaceman.png'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'JEK art',
    galleries: galleries
  });
})


router.get('/:resource', function(req, res, next){
  var resource = req.params.resource
  var resources = ['statement', 'galleries', 'process', 'events',
      'upcoming-events', 'past-events', 'contact', 'confirmation', 'admin']
  if (resources.indexOf(resource) == -1){
    res.render('error', {galleries: galleries})
    return
  }
  res.render(resource, {
    title: resource,
    galleries: galleries
  })
})

router.get('/gallery/:name', function(req, res, next){

  // check to make sure the user hasnt just entered anything and render the error Page
  var name = req.params.name
  console.log(name)
  console.log(typeof(name))
  controller = controllers['art']
  controller.getByParam({galleryName: name})
  .then(function(gallery){
    res.render('gallery', {
      galleryName: name,
      gallery: gallery,
      galleries: galleries
    })
  })
  .catch(function(error){
    res.render("error", {galleries: galleries})
  })
})

router.get('/image/:name', function(req, res, next){
  var name = {name: req.params.name}
  controller = controllers['art']
  controller.getByParam(name)
  .then(function(image){
    image = image[0];
    res.render('image', {
      title: image.name,
      imagePath: image.imagePath,
      gallery: image.galleryName,
      description: image.description,
      dimensions: image.dimensions,
      galleries: galleries
    })
  })
})

// contact form
router.post('/:action', function(req, res, next){
  var action = req.params.action
  if (action == 'contact'){
    res.redirect('/confirmation');
  }
})

module.exports = router;
