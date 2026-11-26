import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;
export let usingMongoDB = false;

export async function connectDB() {
  if (!MONGODB_URI) {
    console.warn('⚠️  MONGODB_URI not set — running with local file-based DB');
    return false;
  }

  if (isConnected) return true;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: 'dreamspace',
      serverSelectionTimeoutMS: 10000, // 10 second timeout
      connectTimeoutMS: 10000,
    });
    isConnected = true;
    usingMongoDB = true;
    console.log('✅ MongoDB Atlas connected — dreamspace DB');
    return true;
  } catch (err) {
    console.warn(`⚠️  MongoDB connection failed: ${err.message}`);
    console.warn('⚠️  Falling back to local file-based database');
    return false;
  }
}

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️  MongoDB disconnected — falling back to file DB');
  isConnected = false;
  usingMongoDB = false;
});
