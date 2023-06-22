const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const path = require('path');
const orderRoutes = require('./routes/orderRoutes.js');
const cors = require("cors");
const https = require('https');
const fs = require('fs');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

const corsOptions = {
origin: "https://mern-deploy-frontend-oz8c.onrender.com",
allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

const privateKeyPath = path.resolve(__dirname, 'private.key');
const certificatePath = path.resolve(__dirname, 'certificate.crt');

const httpsOptions = {
  key: fs.readFileSync(privateKeyPath),
  cert: fs.readFileSync(certificatePath),
};

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

const httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
