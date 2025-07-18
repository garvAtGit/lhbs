"use client";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const params = useParams();
  const query = useSearchParams();
  const slug = params.slug;
  const amount = query.get("amount") || 47000;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePay = async () => {
    const res = await fetch("https://db19c33bbc97.ngrok-free.app/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        slug,
        amount: parseInt(amount),
      }),
    });

    const data = await res.json();
    if (data.success && data.redirectUrl) {
      window.location.href = data.redirectUrl;
    } else {
      alert("Payment failed!");
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
      <h2>Checkout for {slug}</h2>
      <input name="name" onChange={handleChange} placeholder="Your Name" />
      <input name="email" type="email" onChange={handleChange} placeholder="Email" />
      <input name="phone" type="tel" onChange={handleChange} placeholder="Phone" />
      <input name="address" onChange={handleChange} placeholder="Address" />
      <button onClick={handlePay}>Pay ₹{amount}</button>
    </div>
  );
}
