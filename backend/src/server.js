const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./config/database');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Root test endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Meesho Clone API is running'
  });
});

// Database test endpoint
app.get('/api/test-db', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT NOW();');
    res.json({
      message: 'Database connected successfully',
      time: result.rows[0].now
    });
  } catch (error) {
    console.error('Database connection test failed:', error.message);
    res.status(500).json({
      message: 'Database connection failed',
      error: error.message
    });
  }
});

// Mount Product Routes
app.use('/api/products', productRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
