import { handleFormSubmit } from '../formHandler';

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        polarity: 'positive',
        subjectivity: 'subjective',
        text: 'Sample snippet',
      }),
  })
);

beforeEach(() => {
  // Mock the DOM structure
  document.body.innerHTML = `
    <form id="article-form">
      <input id="url-input" value="https://example.com" />
      <div id="results"></div>
    </form>
  `;
});

afterEach(() => {
  jest.clearAllMocks(); // Clear all mocks after each test
});

test('handleFormSubmit processes the form and updates the DOM', async () => {
  const form = document.getElementById('article-form');
  const event = new Event('submit');
  event.preventDefault = jest.fn(); // Mock event.preventDefault

  form.addEventListener('submit', handleFormSubmit);

  // Dispatch the form submit event
  form.dispatchEvent(event);

  // Wait for fetch and DOM updates
  await new Promise((resolve) => setTimeout(resolve, 0)); // Ensure all promises resolve

  // Verify that fetch was called with the correct arguments
  expect(fetch).toHaveBeenCalledWith('http://localhost:8080/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: 'https://example.com' }),
  });

  // Verify that the DOM updated as expected
  const results = document.getElementById('results');

  // Use regex or replace to remove whitespace and newline mismatches
  const cleanResults = results.innerHTML.replace(/\s+/g, ' ').trim();
  expect(cleanResults).toContain('<p><strong>Polarity:</strong> positive</p>');
  expect(cleanResults).toContain('<p><strong>Subjectivity:</strong> subjective</p>');
  expect(cleanResults).toContain('<p><strong>Snippet:</strong> Sample snippet</p>');
});
