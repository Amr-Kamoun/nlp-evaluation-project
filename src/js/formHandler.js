export const handleFormSubmit = async (event) => {
  event.preventDefault();

  const urlInput = document.getElementById('url-input');
  if (!urlInput) {
    console.error("Input element with ID 'url-input' not found.");
    return;
  }

  const url = urlInput.value.trim();

  if (!url) {
    alert('Please enter a valid URL');
    return;
  }

  try {
    const response = await fetch('http://localhost:8080/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from the server: ${response.status}`);
    }

    const data = await response.json();

    const results = document.getElementById('results');
    if (results) {
      results.innerHTML = `
        <p><strong>Polarity:</strong> ${data.polarity}</p>
        <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
        <p><strong>Snippet:</strong> ${data.text}</p>
      `;
    } else {
      console.error("Results element with ID 'results' not found.");
    }
  } catch (error) {
    console.error('Error during form submission:', error);
    const results = document.getElementById('results');
    if (results) {
      results.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
};
