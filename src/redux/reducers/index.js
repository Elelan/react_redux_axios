import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./products.reducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  myProduct: selectedProductReducer
});
