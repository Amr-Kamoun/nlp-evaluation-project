import { fetchArticleAnalysis } from '../apiHandler';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ polarity: 'positive', subjectivity: 'subjective', text: 'Sample snippet' }),
  })
);

describe('fetchArticleAnalysis', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('calls the correct API endpoint and returns data', async () => {
    const url = 'https://example.com';

    const response = await fetchArticleAnalysis(url);

    expect(fetch).toHaveBeenCalledWith('http://localhost:8080/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    expect(response).toEqual({ polarity: 'positive', subjectivity: 'subjective', text: 'Sample snippet' });
  });
});
