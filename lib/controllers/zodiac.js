const { Router } = require('express');
const { signs } = require('../signs-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const match = signs.find((sign) => sign.id === req.params.id);
    return res.json(match);
  })

  .get('/', (req, res) => {
    const filteredData = [];
    for (const sign of signs) {
      filteredData.push({ id: sign.id, name: sign.name });
    }
    res.json(filteredData);
  });
