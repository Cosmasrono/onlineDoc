// PaymentSuccessPage.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PaymentService from '../services/PaymentService';

const PaymentSuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    const processPayment = async () => {
      try {
        // Call the payment service to process the payment
        const { success, paymentId } = await PaymentService.processPayment();

        if (success) {
          // Redirect to the online session page on successful payment
          router.push(`/online-session/${paymentId}`);
        } else {
          console.error('Payment failed');
        }
      } catch (error) {
        console.error('Error processing payment:', error);
      }
    };

    processPayment();
  }, [router]);

  return (
    <div>
      <h1>Processing Payment...</h1>
      {/* You can display additional information or a loading spinner here */}
    </div>
  );
};

export default PaymentSuccessPage;
