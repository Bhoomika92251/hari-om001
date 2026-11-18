import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    status: { type: String, default: 'active', enum: ['active', 'unsubscribed'] },
  },
  { timestamps: true }
);

export const Newsletter = mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema);

