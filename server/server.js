const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const domainRoutes = require('./routes/domainRoutes');
const profileRoutes = require('./routes/profileRoutes');
const newsletterRoute = require('./routes/newsletterRoutes');
const mongoose = require('mongoose');


// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// CORS configuration must come before other middleware
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173').split(',');

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Other middleware
app.use(express.json());

// Handle OPTIONS requests explicitly
app.options('*', cors());

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'development' ? err.message : 'Server error'
  });
});

// Set CORS headers for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/domains', domainRoutes);
app.use('/api/users/profile', profileRoutes);
app.use('/api/newsletter', newsletterRoute);

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'API is running...' });
});

// Debug/Testing route to check DB status - REMOVE IN PRODUCTION
app.get('/api/debug/db-status', async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    
    // Count documents in each collection
    const stats = {};
    for (const name of collectionNames) {
      stats[name] = await mongoose.connection.db.collection(name).countDocuments();
    }
    
    res.json({ 
      database: mongoose.connection.name,
      collections: collectionNames,
      stats,
      connected: mongoose.connection.readyState === 1
    });
  } catch (error) {
    console.error('DB Status Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Debug/Testing route to reset users collection - REMOVE IN PRODUCTION
app.delete('/api/debug/reset-users', async (req, res) => {
  try {
    const result = await mongoose.connection.db.collection('users').deleteMany({});
    res.json({ 
      message: 'Users collection reset',
      deletedCount: result.deletedCount 
    });
  } catch (error) {
    console.error('Reset Users Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
