import mongoose from "mongoose";

const CoursenameSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: String,
  description: String,
  price: Number,
});

// Fix: Use 'mongoose.models.Coursename' instead of 'mongoose.models.Course'
export default mongoose.models.Coursename || mongoose.model("Coursename", CoursenameSchema);