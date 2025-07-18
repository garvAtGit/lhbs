import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  amount: Number,
  transactionId: String,
  status: {
    type: String,
    default: 'PENDING', // updated to SUCCESS after payment
  },
}, {
  timestamps: true,
});

export default mongoose.model('Order', orderSchema);

