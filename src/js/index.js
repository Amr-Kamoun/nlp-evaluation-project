document.getElementById('article-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the URL input element
    const urlInput = document.getElementById('url-input');
    if (!urlInput) {
        console.error("Input element with ID 'url-input' not found.");
        return;
    }

    const url = urlInput.value;

    if (!url) {
        alert('Please enter a valid URL');
        return;
    }

    try {
        // Fetch data from the backend
        const response = await fetch('http://localhost:8080/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url }),
        });

        // Parse the response
        const data = await response.json();
        document.getElementById('results').innerHTML = `
            <p><strong>Polarity:</strong> ${data.polarity}</p>
            <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
            <p><strong>Snippet:</strong> ${data.text}</p>
        `;
    } catch (error) {
        document.getElementById('results').innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
