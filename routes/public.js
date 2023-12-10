const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.render('index')
});
// GET /feed/posts
router.get('/fact', publicController.getFact);
router.get('/getStartingFact', publicController.getStartingFact);

module.exports = router;