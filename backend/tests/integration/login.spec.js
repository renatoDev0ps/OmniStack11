const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('LOGIN', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterEach(async () => {
    await connection.destroy();
  });

  it('should response the POST method Login', async () => {
    await request(app)
      .post('/session')
      .send({ id: "94aea8c1" })
      .expect('Content-Type', /json/)
      .expect(400)
  });
});