const request = require('supertest');
const expect = require('expect')
const { app } = require('../app')

describe('GET /flights', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/flights')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});