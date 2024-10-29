const request = require('supertest');
const app = require('../index.js'); // Імпортуємо ваш Express-додаток

describe('GET /products/:productId', () => {
  test('should return a product with the correct id and name', async () => {
    const response = await request(app).get('/products/1');
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: '1',
      name: 'Product 1 name',
      category: 'Category 1',
    });
  });
});
