const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Trust proxy for accurate IP detection behind reverse proxies
app.set('trust proxy', 1);

// Apply Helmet with custom Content Security Policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://apis.google.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'", "http://localhost:5000"], // adjust if needed
    },
  })
);

app.use(cors());
app.use(express.json());

// Routes
const organisationRoutes = require('./routes/organisationRoutes');
const pollRoutes = require('./routes/pollRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/organisations', organisationRoutes);
app.use('/api/polls', pollRoutes);
app.use('/api/auth', authRoutes);

// Test endpoints
app.get('/', (req, res) => {
  res.send('PulseVote API running!');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Testing that PulseVote API running!' });
});

module.exports = app;
