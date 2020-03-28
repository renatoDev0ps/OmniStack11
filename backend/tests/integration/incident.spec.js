const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('INCIDENT', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterEach(async () => {
    await connection.destroy();
  });

  it('should be able to create a new INCIDENT', async () => {
    const response = await request(app)
      .post('/incidents')
      .set('Authorization', '0b1105f4')
      .expect('Content-Type', /json/)
      .expect(200)
      .send({
        title: "Caso Teste33",
        description: "Detalhes do caso teste",
        value: 130,
      });
  });
});