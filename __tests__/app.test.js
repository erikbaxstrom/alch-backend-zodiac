const request = require('supertest');
const app = require('../lib/app');
const { signs } = require('../lib/signs-data');

describe('zodiac route', () => {
  it('/zodiac should return a list of zodiac signs', async () => {
    const resp = await request(app).get('/zodiac');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(resp.body).toEqual(expected);
  });

  it('/zodiac/1 should return details about the first sign', async () => {
    const resp = await request(app).get('/zodiac/1');
    const expected = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(resp.body).toEqual(expected);
  });
});
