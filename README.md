# Redux-Shop-Axios
Using FakeStore APi, React-redux, React-router-dom.
![image](https://user-images.githubusercontent.com/107535441/225882628-b773088c-8977-412f-9e2c-8994c7605016.png)



# npm CRA
# Used Redux state management
 -> 
 import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

