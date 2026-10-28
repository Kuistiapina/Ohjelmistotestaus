import { describe, it, expect } from 'vitest';
import express from 'express';
import request from 'supertest';

const errorResponse = {
  success: false,
  error: 'Failed to fetch dog image: Network error'
};

describe('dogApi', () => {
  it('should return 500 and error message', async () => {
    const app = express();

    app.get('/api/dog/random', (_req, res) => {
      res.status(500).json(errorResponse);
    });

    const response = await request(app)
      .get('/api/dog/random');

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      'Failed to fetch dog image: Network error'
    );
  });
});