import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    // Destructure required fields
    const { amount, mobileNumber, name, email, address, slug, phone, ...rest } = body;

    // Instamojo expects amount as string, and purpose is required
    const payload = {
      amount: String(amount),
      purpose: slug ? `Course: ${slug}` : "Martial Arts Course",
      buyer_name: name,
      email,
      phone: mobileNumber || phone,
      redirect_url: process.env.INSTAMOJO_REDIRECT_URL || "https://martialartsschool.in/thank-you",
      send_email: true,
      send_sms: true,
      allow_repeated_payments: false,
      ...rest,
    };

    // Debug log for troubleshooting
    console.log("Instamojo payload:", payload);
    console.log("API KEY:", process.env.INSTAMOJO_API_KEY);
    console.log("AUTH TOKEN:", process.env.INSTAMOJO_AUTH_TOKEN);
    console.log("REDIRECT URL:", payload.redirect_url);

    // Call Instamojo API
    const response = await axios.post(
      "https://api.instamojo.com/v2/payment_requests/",
      payload,
      {
        headers: {
          "X-Api-Key": process.env.INSTAMOJO_API_KEY,
          "X-Auth-Token": process.env.INSTAMOJO_AUTH_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.payment_request && response.data.payment_request.longurl) {
      return Response.json({ success: true, redirectUrl: response.data.payment_request.longurl });
    } else {
      // Log full response for debugging
      console.error("Instamojo response:", response.data);
      return Response.json({ success: false, message: "Failed to create payment request." }, { status: 500 });
    }
  } catch (err) {
    // Log error details for debugging
    if (err.response) {
      console.error("Instamojo error response:", err.response.data);
      return Response.json({ success: false, message: err.response.data.message || "Payment error" }, { status: 500 });
    }
    console.error("Instamojo error:", err.message);
    return Response.json({ success: false, message: err.message || "Payment error" }, { status: 500 });
  }
}
