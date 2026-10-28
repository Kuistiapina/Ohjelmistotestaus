import { describe, it, expect, vi } from 'vitest';
import { getDogImage } from '../controllers/dogController';
import * as dogService from '../services/dogService';

describe('getDogImage', () => {
  it('should return success true and dog data from service', async () => {
    const mockDogData = {
      imageUrl: 'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg',
      status: 'success'
    };

    vi.spyOn(dogService, 'getRandomDogImage').mockResolvedValue(mockDogData);

    const req = {} as any;

    const res = {
      json: vi.fn()
    } as any;

    await getDogImage(req, res);

    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: mockDogData
    });
  });
});