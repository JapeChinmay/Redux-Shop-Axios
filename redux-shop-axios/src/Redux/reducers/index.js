import { combineReducers } from "redux";

import { productReducer, selectedProductReducer } from "./productReducer";

const Reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
});

export default Reducers;
