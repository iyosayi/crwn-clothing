import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/selectors/cart";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/actions/cartAction";
import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyContainer
} from "../../styled-components/CartDrop";

const CartDrop = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyContainer>Your cart is empty</EmptyContainer>
      )}
    </CartItemsContainer>
    <Button
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDrop));
