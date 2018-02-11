var eventsController = require('../controllers/eventsController')
var galleriesController = require('../controllers/galleriesController')
var artController = require('../controllers/artController')

module.exports = {
  events: eventsController,
  galleries: galleriesController,
  art: artController
}
