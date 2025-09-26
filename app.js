const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Apply Helmet with custom Content Security Policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://apis.google.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'", "http://localhost:5000"], // adjust if your backend runs on a different port
    },
  })
);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('PulseVote API running!');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Testing that PulseVote API running!' });
});

module.exports = app;
