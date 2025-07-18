import Razorpay from "razorpay";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { amount, courseSlug } = await request.json();
  const options = {
    amount: amount * 100, // paisa
    currency: "INR",
    receipt: `${session.user.email}-${courseSlug}-${Date.now()}`,
  };
  try {
    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}