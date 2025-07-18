// app/payment-success/route.js

import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();

  const transactionId = formData.get("transactionId");
  const merchantId = formData.get("merchantId");
  const amount = formData.get("amount");
  const state = formData.get("state");

  if (state === "SUCCESS") {
    await connectToDatabase();
    await Payment.create({
      userEmail: "unknown", // Replace later when you link to session or phone
      courseSlug: "slug",   // optional if you track per course
      transactionId,
      paid: true,
    });
  }

  return NextResponse.redirect("/thank-you"); // or /access-page
}
