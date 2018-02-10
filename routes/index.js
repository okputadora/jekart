var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    galleries: [
      {name:'2017-2018'}, {name: 'Bedlam cups'}, {name: 'Wood Blocks'}]
  });
});

router.get('/gallery', function(req, res, next){
  res.render('gallery', {
    title: 'Express',
    galleries: [
      {name:'2017-2018', imagePath: 'spaceman(minusframe).png'},
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

module.exports = router;
