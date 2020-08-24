import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const publishedKey =
    "pk_test_51HJ0mqDAUx3o4e7ixVsvsGUcDi5UODgRSfcsD10OKAaMuKn7d8OSFxvFqwZdxLv7jdGeNqCHR5e2Nf8ptE2I8aRq00l32z2j34";
  const StripPrice = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Successful Payment");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total is $${price}`}
      amount={StripPrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default StripeButton;
