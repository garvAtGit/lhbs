import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    // Destructure required fields
    const { amount, mobileNumber, name, email, address, ...rest } = body;

    // Prepare Instamojo payload (customize as needed)
    const payload = {
      amount,
      buyer_name: name,
      email,
      phone: mobileNumber || rest.phone,
      purpose: rest.slug || "Martial Arts Course",
      // Always use the correct redirect URL and pass course slug for access page
      redirect_url: `https://martialartsschool.in/payment-success?course=${encodeURIComponent(rest.slug || "Martial Arts Course")}`,
      ...rest,
    };

    // Call Instamojo API (replace with your credentials)
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
      return Response.json({ success: false, message: "Failed to create payment request." }, { status: 500 });
    }
  } catch (err) {
    return Response.json({ success: false, message: err.message || "Payment error" }, { status: 500 });
  }
}
