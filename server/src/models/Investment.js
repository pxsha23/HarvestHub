import mongoose from 'mongoose';

const investmentSchema = new mongoose.Schema(
  {
    investorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    farmId: { type: mongoose.Schema.Types.ObjectId, ref: 'Farm', required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'completed', 'refunded'], default: 'completed' }
  },
  { timestamps: true }
);

export default mongoose.model('Investment', investmentSchema);


