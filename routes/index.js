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
  var resources = ['statement', 'galleries', 'process', 'events',
      'upcoming-events', 'past-events', 'contact', 'confirmation']
  resource = req.params.resource
  console.log(resource)
  if (resources.indexOf(resource) == -1){
    res.render('error', {galleries: galleries})
    return
  }
  res.render(resource, {
    title: resource,
    galleries: galleries
  })
})
router.get('/buildDb', function(req,res,next){
  res.render('buildDb');
})

router.get('/gallery/:name', function(req, res, next){
  console.log("in here?")
  // check to make sure the user hasnt just entered anything and render the error Page
  var name = req.params.name
  console.log(name)
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

var photos = [{name:'3rd floor process', path:'3rdfloorprocess2.jpg', description:'3rdfloorprocess3.jpg'},
{name:'cooperation process', path:'cooperationprocess2.jpg', description:'cooporationprocess3.jpg'},
{name:'name', path:'cooporationprocess4.jpg', descirption:'goblidoigoook'}]


router.get('/upcoming-events', function(req, res, next){
  res.render('upcoming-events', {
    title: 'Events',
    galleries: galleries,
  })
})

router.get('/displayDbJSON', function(req, res, next){
  controller = controllers['art']
  controller.get()
  .then(function(results){
    res.json(results)
  })
  .catch(function(err){
    res.json({
      error: 'fail',
      message: err,
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
