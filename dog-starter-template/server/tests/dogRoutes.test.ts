import { describe, it, expect, vi } from 'vitest';
import express from 'express';
import request from 'supertest';

const mockResponse = {
  success: true,
  data: {
    imageUrl: 'https://images.dog.ceo/breeds/stbernard/n02109525_15579.jpg',
    status: 'success'
  }
};

vi.mock('../controllers/dogController', () => ({
  getDogImage: (_req: any, res: any) => {
    res.status(200).json(mockResponse);
  }
}));

import dogRoutes from '../routes/dogRoutes';

describe('dogRoutes', () => {
  it('should return 200, success true and mocked imageUrl', async () => {
    const app = express();

    app.use('/api/dogs', dogRoutes);

    const response = await request(app).get('/api/dogs/random');

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.imageUrl).toContain(
      'https://images.dog.ceo/breeds/stbernard/n02109525_15579.jpg'
    );
  });
});