import mongoose from 'mongoose';

const specSchema = new mongoose.Schema({ label: String, value: String });
const materialSchema = new mongoose.Schema({ name: String, type: String, color: String });

const interiorSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    tabLabel: String,
    title: String,
    subtitle: String,
    image: String,
    alt: String,
    description: String,
    specs: [specSchema],
    materials: [materialSchema],
  },
  { timestamps: true }
);

export const Interior = mongoose.models.Interior || mongoose.model('Interior', interiorSchema);

