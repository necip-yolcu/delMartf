import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import createPaymentIntent from "./api/create-payment-intent";

//const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const stripePromise = loadStripe('pk_test_51LQB8FDfNLy6k24iYsNl3ter7es5Lg356R2xF6KxDLDUcNUuRLfMe6Kia7TUbebutFfMkZvDT2U8naKloGo9yDFw009n1YHeNR');

const PaymentComponent = ({amount, email}) => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads          
        const fetchPaymentIntent = async () => {
            try {
                const secret = await createPaymentIntent(amount);
                setClientSecret(secret);
            } catch (error) {
                console.error("Error fetching payment intent:", error);
            }
        }

        fetchPaymentIntent();
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };


  return (
    <div className="ps-block__payment-gateways">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm email={email} />
        </Elements>
      )}
    </div>
  )
}

export default PaymentComponent