import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express(); // Initialize app first
const PORT = 8080;

// Middleware
app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

// API Endpoint
app.post('/analyze', async (req, res) => {
  console.log('Request received:', req.body); // Debugging log

  const { url } = req.body;
  if (!url) {
    console.error('Error: URL is missing in the request body'); // Debugging log
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const apiKey = process.env.MEANINGCLOUD_API_KEY;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${encodeURIComponent(url)}&lang=en`;

    console.log('Calling MeaningCloud API with URL:', apiUrl); // Debugging log

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status && data.status.code !== '0') {
      console.error('Error from MeaningCloud API:', data.status.msg); // Debugging log
      return res.status(500).json({ error: data.status.msg });
    }

    console.log('Response from MeaningCloud API:', data); // Debugging log

    res.json({
      polarity: data.score_tag,
      subjectivity: data.subjectivity,
      text: data.sentence_list[0]?.text || 'No text snippet available',
    });
  } catch (error) {
    console.error('Error during API call or response processing:', error); // Debugging log
    res.status(500).json({ error: 'Failed to analyze the URL' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
