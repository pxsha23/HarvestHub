import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.routes.js';
import farmRoutes from './routes/farm.routes.js';
import investorRoutes from './routes/investor.routes.js';
import transactionRoutes from './routes/transaction.routes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Static for uploaded images
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/farms', farmRoutes);
app.use('/api/investors', investorRoutes);
app.use('/api/transactions', transactionRoutes);

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'agrinvest-server' });
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/agrinvest';

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected:', MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();


