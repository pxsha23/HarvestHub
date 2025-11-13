import mongoose from 'mongoose';

const farmSchema = new mongoose.Schema(
  {
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    cropType: { type: String, required: true },
    size: { type: String },
    investmentRequired: { type: Number, required: true },
    profitShare: { type: Number, required: true },
    description: { type: String },
    images: [{ type: String }],
    approved: { type: Boolean, default: false },
    previousHarvestRecords: [{
      season: String,
      yield: String,
      revenue: Number
    }]
  },
  { timestamps: true }
);

export default mongoose.model('Farm', farmSchema);


