import { combineReducers } from "redux";
import userReducer from "./reducers/user-redcuer";
import cartReducer from "./reducers/cartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});
