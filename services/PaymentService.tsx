// PaymentService.js
const PaymentService = {
    processPayment: async () => {
      // Simulate payment processing
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, paymentId: 'mock-payment-id' });
        }, 2000); // Simulating a delay for processing
      });
    },
  };
  
  export default PaymentService;
  