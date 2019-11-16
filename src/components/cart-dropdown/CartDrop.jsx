import React from "react";
import Button from "../button/Button";
import "./cartdrop.scss";

const CartDrop = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDrop;
