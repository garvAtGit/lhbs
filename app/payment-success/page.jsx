"use client";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
  const query = useSearchParams();
  const course = query.get("course");
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>🎉 Payment Successful!</h1>
      <p>You’ve successfully purchased the <strong>{course}</strong> course.</p>
      <a href={`/access/${course}`}>Go to Access Page</a>
    </div>
  );
}
