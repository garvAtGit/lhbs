// ✅ FILE: server.js

import express from 'express';
import cors from 'cors';
import Order from './models/order.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './app/utils/db.js';
import { initiatePayment } from './app/utils/phonepe.js';


const app = express();
dotenv.config();
connectDB();

app.get('/test', (req, res) => {
  res.send('Backend is working!');
});

app.use(cors({
  origin: 'http://localhost:3000', // or your frontend URL
  credentials: true,
}));
app.use(bodyParser.json());
import paymentRoutes from './app/routes/paymentRoutes.js';
app.use('/api', paymentRoutes);


// Step 1: Create Order and Redirect
// app.post('/api/create-payment', async (req, res) => {
//   try {
//     const { name, email, phone, course, amount } = req.body;

//     const transactionId = `order_${Date.now()}`;

//     // Save to DB
//     await Order.create({ name, email, phone, course, amount, transactionId });

//     const redirectUrl = await initiatePayment({
//       transactionId,
//       amount,
//       redirectBase: `${process.env.FRONTEND_URL}/payment-success`,
//     });

//     res.json({ redirectUrl });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Error creating order' });
//   }
// });

// Step 2: PhonePe calls this after payment
app.post('/api/payment-callback', async (req, res) => {
  try {
    // const isValid = verifyChecksum(req.body);
    if (!isValid) return res.status(403).send('Invalid checksum');

    const { transactionId, status } = req.body.data;

    const order = await Order.findOne({ transactionId });
    if (!order) return res.status(404).send('Order not found');

    order.status = status;
    await order.save();

    // Send email to admin and user
    await sendOrderEmail(order);

    res.status(200).send('Payment recorded');
  } catch (err) {
    console.error(err);
    res.status(500).send('Callback error');
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
