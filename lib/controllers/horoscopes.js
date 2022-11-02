const { Router } = require('express');
const { horoscopes } = require('../horoscopes-data.js');

module.exports = Router().get('/:sign', (req, res) => {
  const match = horoscopes.find(
    (horoscope) => horoscope.sign === req.params.sign
  );
  return res.json(match);
});
