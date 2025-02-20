import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDb = async () => {
  try {
    const uri = process.env.DB_CONNECT;
    if (!uri) throw new Error('DB_CONNECT environment variable is not set.');

    await mongoose.connect(uri); // No options needed for modern drivers
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Connection failed:', err.message);
  }
};

export default connectToDb;
