const request = require('supertest');

jest.mock('@supabase/supabase-js', () => {
  const mockChain = {
    select: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    order: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
  };
  return {
    createClient: jest.fn(() => ({ from: jest.fn(() => mockChain) })),
    _mockChain: mockChain,
  };
});

const app = require('../src/app');
const { _mockChain } = require('@supabase/supabase-js');

beforeEach(() => {
  jest.clearAllMocks();
});

test('GET / retorna status ok', async () => {
  const res = await request(app).get('/');
  expect(res.status).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('GET /gastos retorna lista', async () => {
  _mockChain.order.mockResolvedValueOnce({ data: [], error: null });
  const res = await request(app).get('/gastos');
  expect(res.status).toBe(200);
});

test('POST /gastos retorna 400 sem campos', async () => {
  const res = await request(app).post('/gastos').send({});
  expect(res.status).toBe(400);
});

test('GET /gastos/total retorna total', async () => {
  _mockChain.select.mockResolvedValueOnce({ data: [{ valor: 10 }, { valor: 20 }], error: null });
  const res = await request(app).get('/gastos/total');
  expect(res.status).toBe(200);
  expect(res.body.total).toBe(30);
});
