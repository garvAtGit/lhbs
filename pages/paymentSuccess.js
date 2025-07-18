import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PaymentSuccess() {
  const [valid, setValid] = useState(null);
  const router = useRouter();
  const { tx } = router.query;

  useEffect(() => {
    if (!tx) return;

    fetch(`/api/check-status?tx=${tx}`)
      .then(res => res.json())
      .then(data => {
        if (!data.valid) router.replace('/');
        else setValid(true);
      });
  }, [tx]);

  if (valid === null) return <p>Verifying payment...</p>;

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
}