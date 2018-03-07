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

  controller = controllers['art']
  controller.getByParam({galleryName: name})
  .then(function(gallery){
    console.log("Rendering!@")
    res.render('gallery', {
      galleryName: name,
      gallery: gallery,
      galleries: galleries
    })
  })
  .catch(function(error){
    console.log("error")
    res.render("error", {galleries: galleries})
  })
})

router.get('/image/:name', function(req, res, next){
  var name = {name: req.params.name}
  controller = controllers['art']
  controller.getByParam(name)
  .then(function(image){
    console.log(image)
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

router.post('/:resource/:action', function(req, res, next){
  resource = req.params.resource
	if (resource == 'api'){
    console.log(resource)
    next()
    return
  }
})
// contact form
router.post('/:action', function(req, res, next){
  console.log("we're missing the API route")
  var action = req.params.action
  if (action == 'contact'){
    res.redirect('/confirmation');
  }
})

module.exports = router;
