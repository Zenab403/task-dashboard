import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

mongoose.connection.on('connected', () => {
  console.log('Connected to DB:', mongoose.connection.db.databaseName);
});

// ✅ Consistent route prefix
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server started on port ${process.env.PORT}`);
});
