const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('PROFILE', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterEach(async () => {
    await connection.destroy();
  });

  it('should response the GET method', async () => {
    await request(app)
      .post('/profile')
      .set('Authorization', '0b1105f4')
      .expect(404)
  });
});