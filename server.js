import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // ✅ allows frontend (localhost:3000) to access backend (localhost:5000)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

mongoose.connection.on('connected', () => {
  console.log('Connected to DB:', mongoose.connection.db.databaseName);
});

// Routes
app.use('/tasks', taskRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server started on port ${process.env.PORT}`);
});

