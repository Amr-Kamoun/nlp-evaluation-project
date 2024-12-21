export const fetchArticleAnalysis = async (url) => {
    const response = await fetch('http://localhost:8080/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    return response.json();
  };
  