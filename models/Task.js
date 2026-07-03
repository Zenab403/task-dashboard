import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },   // optional
  priority: { type: String },      // optional
  dueDate: { type: Date },         // optional
  status: { type: String, default: 'Incomplete' }
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
