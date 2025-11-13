import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import Investment from '../models/Investment.js';
import ProfitRecord from '../models/ProfitRecord.js';
import User from '../models/User.js';

const router = Router();

// Admin: list transactions and profit records
router.get('/', authenticate, authorize('admin'), async (req, res) => {
  const [investments, profits, farmers, investors] = await Promise.all([
    Investment.find().sort({ createdAt: -1 }).lean(),
    ProfitRecord.find().sort({ createdAt: -1 }).lean(),
    User.find({ role: 'farmer' }).select('name email').lean(),
    User.find({ role: 'investor' }).select('name email').lean()
  ]);
  res.json({ investments, profits, farmers, investors });
});

export default router;


