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

router.get('/statement', function(req, res, next){
  res.render('statement'), {
    title: 'Statement',
    galleries: galleries
  }
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

router.get('/process', function(req, res, next){
  res.render('process', {
    title: 'Process',
    galleries: galleries
  })
})

var photos = [{name:'3rd floor process', path:'3rdfloorprocess2.jpg', description:'3rdfloorprocess3.jpg'},
{name:'cooperation process', path:'cooperationprocess2.jpg', description:'cooporationprocess3.jpg'},
{name:'name', path:'cooporationprocess4.jpg', descirption:'goblidoigoook'}]

router.get('/process/photos', function(req, res, next){
  res.render('photos', {
    title: 'Process: Photos',
    galleries: galleries,
    photos: photos,

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
  var name = {galleryName: req.params.name}
  controller = controllers['art']
  controller.getByParam(name)
  .then(function(gallery){
    res.render('gallery', {
      galleryName: gallery[0].galleryName,
      gallery: gallery,
      galleries: galleries
    })
  })
  .catch()
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
