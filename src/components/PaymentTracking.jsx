import React from 'react';
import './Pt.css';  

const PaymentTracking = ({ payments, markAsPaid }) => {
  if (!payments) return null;  

  return (
    <div className="payment-tracking">
      <h2>Payment Tracking</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            <span>Amount: ${payment.amount}</span>
            <span>Status: {payment.status}</span>
            {payment.status === 'unpaid' && (
              <button onClick={() => markAsPaid(payment.id)}>Mark as Paid</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentTracking;
