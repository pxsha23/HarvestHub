import mongoose from 'mongoose';

const profitRecordSchema = new mongoose.Schema(
  {
    farmId: { type: mongoose.Schema.Types.ObjectId, ref: 'Farm', required: true },
    totalProfit: { type: Number, required: true },
    farmerShare: { type: Number, required: true },
    investorShare: { type: Number, required: true },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model('ProfitRecord', profitRecordSchema);


