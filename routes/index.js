var express = require('express');
var controllers = require('../controllers/')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    galleries: [
      {name:'2016'}, {name: 'Bedlam cups'}, {name: 'Wood Blocks'}]
  });
});

router.get('/buildDb', function(req,res,next){
  res.render('buildDb');
})

router.get('/galleries', function(req, res, next){
  res.render('galleries', {
    title: 'Express',
    galleries: [
      {name:'2016', imagePath: 'spaceman(minusframe).png'},
      {name:'Bedlam cups', imagePath: 'focalpoints.png'},
      {name:'Wood Blocks', imagePath: 'thirdfloor.png'},
      {name:'2017-2018', imagePath: 'spaceman(minusframe).png'},
      {name:'Bedlam cups', imagePath: 'focalpoints.png'},
      {name:'Wood Blocks', imagePath: 'thirdfloor.png'},
      {name:'2017-2018', imagePath: 'spaceman(minusframe).png'},
      {name:'Bedlam cups', imagePath: 'focalpoints.png'},
      {name:'Wood Blocks', imagePath: 'thirdfloor.png'}
    ]
  });
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
  console.log(name)
  controller = controllers['art']

  // if (galleries.includes(name) == false){
  //   res.render('error', {message: 'page does not exist'})
  // }

  // get all of the images from this gallery
  controller.getByGallery(name)
  .then(function(gallery){
    res.render('gallery', {
      title: 'gallery',
      gallery: gallery
    })
  })
  .catch()
})
router.get('/confirmation', function(req, res, next){
  res.render('confirmation');
})
router.get('/contact', function(req, res, next){
  console.log('contact get')
  res.render('contact', {title: "Contact"});
})

// contact form
router.post('/:action', function(req, res, next){
  console.log('contact post')
  var action = req.params.action
  if (action == 'contact'){
    console.log(req.body)
    res.redirect('/confirmation');
  }
})

module.exports = router;
