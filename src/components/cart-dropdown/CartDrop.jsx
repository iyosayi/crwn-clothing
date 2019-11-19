import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/selectors/cart";
import Button from "../button/Button";
import "./cartdrop.scss";
import CartItem from "../cart-item/CartItem";

const CartDrop = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDrop);
