const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const path = require('path');
const orderRoutes = require('./routes/orderRoutes.js');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const https = require('https');
const fs = require('fs');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'https://mern-deploy-frontend-oz8c.onrender.com',
  credentials: true  // Allow cookies to be sent
}));

app.use(cookieParser());

// Set the appropriate CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://mern-deploy-frontend-oz8c.onrender.com');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

const PORT = process.env.PORT || 5000;

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.use((req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.log('err', err);
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
