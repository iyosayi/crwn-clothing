import { combineReducers } from "redux";
import userReducer from "./reducers/user-redcuer";

export const rootReducer = combineReducers({
  user: userReducer
});
