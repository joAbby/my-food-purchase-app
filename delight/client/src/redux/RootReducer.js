import { combineReducers } from "redux";

import cartReducer from "./cart/CartReducer";
import userReducer from './user/UserReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
