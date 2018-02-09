var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    galleries: [
      {title:'2017-2018'}, {title: 'Bedlam cups'}, {title: 'Wood Blocks'}]
  });
});

module.exports = router;
