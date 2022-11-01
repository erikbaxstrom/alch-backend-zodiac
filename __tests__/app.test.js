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
});
