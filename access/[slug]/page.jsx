export default function AccessPage({ params, searchParams }) {
  const txId = searchParams.tx;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🎉 Payment Successful for {params.slug}</h1>
      <p>Your Transaction ID: <strong>{txId}</strong></p>
      <p>
        Thank you for enrolling! Your access will be activated shortly.
        <br />
        <a href="https://wa.me/919713600085" target="_blank">WhatsApp us if needed</a>
      </p>
    </div>
  );
}
