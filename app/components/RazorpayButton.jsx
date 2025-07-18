'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function RazorpayButton({ amount, courseSlug, className }) {
  const { data: session } = useSession();
  const router = useRouter();
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        scriptLoaded.current = true;
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
        scriptLoaded.current = false;
      };
    } else {
      scriptLoaded.current = true;
    }
  }, []);

  const handlePayment = async () => {
  if (!session) {
    router.push(`/api/auth/signin?callbackUrl=${encodeURIComponent(window.location.pathname)}`);
    return;
  }
    
    if (!window.Razorpay) {
      alert("Payment system is still loading. Please try again in a moment.");
      return;
    }
  // Create order (no response object here)
  const res = await fetch("/api/razorpay-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: amount * 100, courseSlug }),
  });
  const order = await res.json();

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "Your Company",
    description: "Course Payment",
    order_id: order.id,
    handler: async function (response) {
      // Now you have response from Razorpay
      const verifyRes = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...response, courseSlug, userEmail: session.user.email }),
      });
      const verifyData = await verifyRes.json();
      if (verifyData.success) {
        setTimeout(() => {
          window.location.href = `/access/${courseSlug}`;
        }, 500);
      } else {
        alert("Payment verification failed!");
      }
    },
    prefill: {
      name: session.user?.name || "",
      email: session.user?.email || "",
    },
    theme: { color: "#3399cc" },
    modal: {
      ondismiss: function () {
        // Optional: handle if user closes the popup without paying
      }
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

 return (
    <button className={className} onClick={handlePayment}>
      Pay ₹{amount} with Razorpay
    </button>
  );
}