import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: String,
    location: String,
    category: { type: String, index: true },
    tags: [String],
    image: String,
    alt: String,
    description: String,
  },
  { timestamps: true }
);

export const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema);

