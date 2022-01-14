import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducers from "./cartReducers";
import wishlistReducers from "./wishlistReducers";
const reducers = combineReducers({
  allproducts: productReducer,
  cart: cartReducers,
  wishlist: wishlistReducers,
});
export default reducers;
