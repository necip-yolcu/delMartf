import { useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'

const MyControlComp = () => {
    const stripe = useStripe();
    const [message, setMessage] = useState(null);


    useEffect(() => {
        console.log("STATUS: 000");

        if (!stripe) {
        return;
        }
        console.log("STATUS: 111");

        const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
        );
        console.log("STATUS: 222",clientSecret);

        if (!clientSecret) {
        return;
        }
        console.log("STATUS: 333", clientSecret);

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
            case "succeeded":
            console.log("STATUS: Payment succeeded!");
            setMessage("Payment succeeded!");
            break;
            case "processing":
            console.log("STATUS: Your payment is processing.");
            setMessage("Your payment is processing.");
            break;
            case "requires_payment_method":
            console.log("STATUS: Your payment was not successful, please try again.");
            setMessage("Your payment was not successful, please try again.");
            break;
            default:
            console.log("STATUS: Something went wrong.");
            setMessage("Something went wrong.");
            break;
        }
    });
    console.log("STATUS: 444");
    }, [stripe]);

    return (
        <div>YOUR MESSAGE: {message}</div>
    )
}

export default MyControlComp