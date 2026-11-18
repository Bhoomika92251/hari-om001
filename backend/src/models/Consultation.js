import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    projectType: { type: String, trim: true },
    budget: { type: String, trim: true },
    message: { type: String, trim: true },
    status: { type: String, default: 'new', enum: ['new', 'reviewed', 'contacted', 'closed'] },
  },
  { timestamps: true }
);

export const Consultation = mongoose.models.Consultation || mongoose.model('Consultation', consultationSchema);

