import mongoose from "mongoose";
const PaymentSchema = new mongoose.Schema({
  userEmail: String,
  courseSlug: String,
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
  paid: Boolean,
});
export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);