import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, default: 'Incomplete' }
}, { timestamps: true });

// ✅ Explicitly bind to "tasks" collection
const Task = mongoose.model('Task', taskSchema, 'tasks');

export default Task;
