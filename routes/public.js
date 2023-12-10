// Import the express framework
const express = require('express');

// Import the public controller module
const publicController = require('../controllers/public');

// Create an instance of the express router
const router = express.Router();

// Route for handling GET requests to the root endpoint '/'
router.get('/', async (req, res, next) => {
  // Render the 'index' view
  res.render('index');
});

// Route for handling GET requests to the '/fact' endpoint
router.get('/fact', publicController.getFact);

// Export the router for use in other modules
module.exports = router;
