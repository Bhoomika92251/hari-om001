import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema({
  icon: String,
  text: String,
});

const blueprintSchema = new mongoose.Schema({
  level: String,
  scale: String,
  orientation: String,
  highlights: [String],
});

const designSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    typology: String,
    category: { type: String, index: true },
    sqft: String,
    specs: String,
    description: String,
    image: String,
    alt: String,
    features: [featureSchema],
    blueprint: blueprintSchema,
  },
  { timestamps: true }
);

export const Design = mongoose.models.Design || mongoose.model('Design', designSchema);

