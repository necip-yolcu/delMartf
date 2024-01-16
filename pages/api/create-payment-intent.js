// This is your test secret API key.
//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import Stripe from "stripe";

//const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
const stripe = new Stripe('sk_test_51LQB8FDfNLy6k24iwK35OJ0OTRJO1CEp045iUOtI3m8ciz0zuiJLMgnqmItPYG4WGuPjaHqSUGUwHimDb5t0jJjo00iuQLhOFL', {
  apiVersion: '2020-08-27',
})

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export default async function handler(req, res) {

//const createPaymentIntent = async (items) => {
  //console.log("createPaymentIntentcreatePaymentIntent: " ,items)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(100),
    //amount: items*100,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  })

    console.log("client__SECRET: ", paymentIntent?.client_secret)

  //return paymentIntent?.client_secret;
  res.send({
    clientSecret: paymentIntent?.client_secret,
  })
};

//export default createPaymentIntent