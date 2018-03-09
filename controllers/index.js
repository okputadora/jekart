var eventsController = require('../controllers/eventsController')
var galleriesController = require('../controllers/galleriesController')
var artController = require('../controllers/artController')
var inquiryController = require('../controllers/inquiryController')
var shopController = require('../controllers/shopController')

module.exports = {
  events: eventsController,
  galleries: galleriesController,
  art: artController,
  inquiry: inquiryController,
  shop: shopController,
}
