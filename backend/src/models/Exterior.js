import mongoose from 'mongoose';

const elementSchema = new mongoose.Schema({ name: String, description: String });
const technicalSchema = new mongoose.Schema({}, { strict: false });

const exteriorSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    category: String,
    title: String,
    subtitle: String,
    image: String,
    alt: String,
    description: String,
    elements: [elementSchema],
    technical: { type: Map, of: String },
  },
  { timestamps: true }
);

export const Exterior = mongoose.models.Exterior || mongoose.model('Exterior', exteriorSchema);

