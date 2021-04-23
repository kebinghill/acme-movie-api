const { expect } = require('chai');

const app = require('supertest')(require('../app'));

describe('first test', () => {
  it('should pass', async () => {
    const foo = 'tried';
    expect(foo).to.be.a('string');
  });
});

describe('status', () => {
  it('should receive status code 201', async () => {
    const response = await app.get('/');
    expect(response.status).to.equal(201);
  });
});
