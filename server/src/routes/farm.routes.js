import { Router } from 'express';
import Farm from '../models/Farm.js';
import Investment from '../models/Investment.js';
import ProfitRecord from '../models/ProfitRecord.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { upload } from '../utils/uploader.js';

const router = Router();

// Public: list approved farms with filters
router.get('/', async (req, res) => {
  const { location, cropType, maxInvestment } = req.query;
  const query = { approved: true };
  if (location) query.location = new RegExp(location, 'i');
  if (cropType) query.cropType = new RegExp(cropType, 'i');
  if (maxInvestment) query.investmentRequired = { $lte: Number(maxInvestment) };
  const farms = await Farm.find(query).sort({ createdAt: -1 }).lean();
  res.json(farms);
});

// Public: farm detail
router.get('/:id', async (req, res) => {
  const farm = await Farm.findById(req.params.id).lean();
  if (!farm) return res.status(404).json({ message: 'Not found' });
  res.json(farm);
});

// Admin: list all farms including pending
router.get('/admin/all', authenticate, authorize('admin'), async (req, res) => {
  const farms = await Farm.find({}).sort({ createdAt: -1 }).lean();
  res.json(farms);
});

// Farmer: list own farms (any approval state)
router.get('/mine/list', authenticate, authorize('farmer'), async (req, res) => {
  const farms = await Farm.find({ farmerId: req.user.id }).sort({ createdAt: -1 }).lean();
  res.json(farms);
});

// Farmer: create farm listing (pending approval)
router.post('/', authenticate, authorize('farmer'), upload.array('images', 5), async (req, res) => {
  try {
    const imagePaths = (req.files || []).map(f => `/uploads/${f.filename}`);
    const data = JSON.parse(req.body.data || '{}');
    const farm = await Farm.create({
      farmerId: req.user.id,
      title: data.title,
      location: data.location,
      cropType: data.cropType,
      size: data.size,
      investmentRequired: data.investmentRequired,
      profitShare: data.profitShare,
      description: data.description,
      previousHarvestRecords: data.previousHarvestRecords || [],
      images: imagePaths,
      approved: false
    });
    res.status(201).json(farm);
  } catch (e) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// Farmer: list investors in their farm
router.get('/:id/investors', authenticate, authorize('farmer'), async (req, res) => {
  const farm = await Farm.findById(req.params.id);
  if (!farm) return res.status(404).json({ message: 'Not found' });
  if (farm.farmerId.toString() !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
  const investors = await Investment.find({ farmId: farm._id }).populate('investorId', 'name email').lean();
  res.json(investors);
});

// Farmer: update harvest/profit details -> create ProfitRecord
router.post('/:id/profits', authenticate, authorize('farmer'), async (req, res) => {
  const farm = await Farm.findById(req.params.id);
  if (!farm) return res.status(404).json({ message: 'Not found' });
  if (farm.farmerId.toString() !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
  const { totalProfit } = req.body;
  const investorShare = Math.round((totalProfit * farm.profitShare) / 100);
  const farmerShare = totalProfit - investorShare;
  const record = await ProfitRecord.create({ farmId: farm._id, totalProfit, farmerShare, investorShare });
  res.status(201).json(record);
});

// Admin: approve/reject listings
router.patch('/:id/approve', authenticate, authorize('admin'), async (req, res) => {
  const { approved } = req.body;
  const farm = await Farm.findByIdAndUpdate(req.params.id, { approved: !!approved }, { new: true });
  if (!farm) return res.status(404).json({ message: 'Not found' });
  res.json(farm);
});

export default router;


