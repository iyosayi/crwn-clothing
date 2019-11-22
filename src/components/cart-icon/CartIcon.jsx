import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/selectors/cart";
import { toggleCartHidden } from "../../redux/actions/cartAction";
import { createStructuredSelector } from "reselect";
import "./cart.scss";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon
} from "../../styled-components/CartIcon";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer as="div" onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCount as="span">{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
