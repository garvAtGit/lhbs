import { NextResponse } from "next/server";
import Payment from "../../../models/Payment";
import { connectToDatabase } from "../../../lib/mongodb";

export async function POST(request) {
  try {
    const { courseSlug, userEmail } = await request.json();
    await connectToDatabase();
    await Payment.create({
      userEmail,
      courseSlug,
      paid: true,
      razorpay_order_id: "test",
      razorpay_payment_id: "test",
      razorpay_signature: "test",
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Verify payment error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}