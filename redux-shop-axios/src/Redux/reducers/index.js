import { combineReducers } from "redux";

import { productReducer } from "./productReducer";

const Reducers = combineReducers({
  allProducts: productReducer,
});

export default Reducers;
