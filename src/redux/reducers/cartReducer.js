import { TOGGLE_CART_HIDDEN } from "../types";
import { ADD_ITEM } from "../types";
import { addItemToCart } from "../utils/cartUtils";

const initialState = {
  isHidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
