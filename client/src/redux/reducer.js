import * as actionType from "./constant";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GetProductSuccess:
      return { products: action.payload };
    case actionType.GetProductFail:
      return { error: action.payload };
    default:
      return state;
  }
};
