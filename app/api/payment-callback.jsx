// pages/api/payment-callback.js
import connectToDatabase from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const { merchantTransactionId, code, data } = req.body;

    if (code !== "PAYMENT_SUCCESS") {
      console.log("❌ Payment failed or canceled:", req.body);
      return res.status(400).json({ success: false });
    }

    await connectToDatabase();

    await Payment.updateOne(
      { transactionId: merchantTransactionId },
      {
        $set: {
          paid: true,
          status: "SUCCESS",
          phonepeResponse: data,
        },
      },
      { upsert: true }
    );

    console.log("✅ Payment success logged:", merchantTransactionId);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Callback error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
