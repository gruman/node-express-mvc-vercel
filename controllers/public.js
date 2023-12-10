// Import the facts constant from the '../constants/facts' module
const facts = require('../constants/facts');

// Function to generate a random integer within a given range
function randomInt(min, max) {
  // Ensure that the input values are integers
  min = Math.ceil(min);
  max = Math.floor(max);

  // Generate a random integer within the specified range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Controller function to get a random fact and send it as a JSON response
exports.getFact = (req, res, next) => {
  // Send a JSON response with a random fact from the facts array
  res.json(facts[randomInt(0, facts.length)]);
}
