import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.MONGO_URI as string; // Explicitly cast to string
        await mongoose.connect(mongoURI);
        console.log('[database] MongoDB connected successfully');
    } catch (err) {
        console.error('[database] MongoDB connection failed:', (err as Error).message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
