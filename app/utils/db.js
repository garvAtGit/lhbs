import mongoose from 'mongoose';
import axios from 'axios';

// Add this function at the top
async function fetchAuthToken() {
  // Replace with real logic if needed
  return "test-token";
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;

export async function initiatePayment({ orderId, amount, redirectUrl }) {
  const token = await fetchAuthToken();

  const payload = {
    merchantOrderId: orderId,
    amount: amount * 100,
    redirectUrl,
    paymentFlow: { type: 'PG_CHECKOUT' },
    paymentMode: { type: 'UPI_INTENT' }, // or other modes
    merchantUrls: { redirectUrl },
  };

  const res = await axios.post(
    `${process.env.PHONEPE_ENV === 'production'
      ? 'https://api.phonepe.com/apis/pg/v1'
      : 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1'
    }/payments/v2/pay`,
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `O-Bearer ${token}`,
      },
    }
  );

  return res.data.data.redirectUrl;
}