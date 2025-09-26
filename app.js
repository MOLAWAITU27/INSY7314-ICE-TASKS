import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import organisationRoutes from './routes/organisationRoutes.js';
import pollRoutes from './routes/pollRoutes.js';
import authRoutes from './routes/authRoutes.js';

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

// Health check endpoint for unit testing
app.get('/health', (req, res) => 
  res.status(200).json({
    ok: true,
    ts: Date.now()
  })
);

export default app;
