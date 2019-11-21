import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_H9n338q0Yq7CVFWbb8bTCinW00pWzMGSo4";
  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN CLOTHING Ltd"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
