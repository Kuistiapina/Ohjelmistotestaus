import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getRandomDogImage } from '../services/dogService';

describe('getRandomDogImage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should return imageUrl and success status when API call succeeds', async () => {
    const mockResponse = {
      message: 'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg',
      status: 'success'
    };

    const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => mockResponse
    } as Response);

    const result = await getRandomDogImage();

    expect(result.imageUrl).toBe(mockResponse.message);
    expect(result.status).toBe('success');
    expect(fetchMock).toHaveBeenCalledOnce();
  });
  
    it('should throw an error when API returns status 500', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: false,
      status: 500
    } as Response);

    await expect(getRandomDogImage()).rejects.toThrow(
      'Failed to fetch dog image: Dog API returned status 500'
    );
  });
});