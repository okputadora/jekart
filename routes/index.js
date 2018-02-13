var express = require('express');
var controllers = require('../controllers/')
var router = express.Router();

var galleries = [
  {name:'2017/2018', imagePath: 'spaceman(minusframe).png'},
  {name:'bedlam cups', imagePath: 'focalpoints.png'},
  {name:'scribble faces', imagePath: 'thirdfloor.png'},
  {name:'window', imagePath: 'spaceman(minusframe).png'},
  {name:'wood blocks', imagePath: 'focalpoints.png'},
  {name:'deep resin', imagePath: 'thirdfloor.png'},
  {name:'wood burning', imagePath: 'spaceman(minusframe).png'},
  {name:'degradation sets', imagePath: 'focalpoints.png'},
  {name:'2016', imagePath: 'thirdfloor.png'},
  {name:'2014-2015', imagePath: ''}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    galleries: galleries
  });
})
router.get('/buildDb', function(req,res,next){
  res.render('buildDb');
})

router.get('/galleries', function(req, res, next){
  res.render('galleries', {
    title: 'Galleries',
    galleries: galleries
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

router.get('/gallery/:name', function(req, res, next){
  // check to make sure the user hasnt just entered anything and render the error Page
  var resource = req.params.resource
  var name = {galleryName: req.params.name}
  controller = controllers['art']
  controller.getByGallery(name)
  .then(function(gallery){
    res.render('gallery', {
      galleryName: galleries[0].galleryName,
      gallery: gallery,
      galleries: galleries
    })
  })
  .catch()
})
router.get('/confirmation', function(req, res, next){
  res.render('confirmation');
})
router.get('/contact', function(req, res, next){
  res.render('contact', {title: "Contact"});
})

// contact form
router.post('/:action', function(req, res, next){
  var action = req.params.action
  if (action == 'contact'){
    res.redirect('/confirmation');
  }
})

module.exports = router;
