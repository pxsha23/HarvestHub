import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import Investment from '../models/Investment.js';
import Farm from '../models/Farm.js';
import ProfitRecord from '../models/ProfitRecord.js';

const router = Router();

// Investor: invest in installments
router.post('/invest', authenticate, authorize('investor'), async (req, res) => {
  const { farmId, amount } = req.body;
  const farm = await Farm.findById(farmId);
  if (!farm || !farm.approved) return res.status(400).json({ message: 'Invalid farm' });
  const inv = await Investment.create({ investorId: req.user.id, farmId, amount, status: 'completed' });
  res.status(201).json(inv);
});

// Investor: portfolio
router.get('/portfolio', authenticate, authorize('investor'), async (req, res) => {
  const investments = await Investment.find({ investorId: req.user.id }).populate('farmId').lean();
  const farmIds = investments.map(i => i.farmId?._id).filter(Boolean);
  const profitRecords = await ProfitRecord.find({ farmId: { $in: farmIds } }).lean();
  res.json({ investments, profitRecords });
});

export default router;


