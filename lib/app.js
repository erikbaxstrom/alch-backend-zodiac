const express = require('express');

const app = express();

app.use('/zodiac', require('./controllers/zodiac'));
app.use('/horoscopes', require('./controllers/horoscopes'));

module.exports = app;
