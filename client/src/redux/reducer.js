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
export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.GetProductDetailRequest:
      return { loading: true };
    case actionType.GetProductDetailSuccess:
      return { product: action.payload };
    case actionType.GetProductDetailFail:
      return { loading: false, error: action.payload };
    case actionType.GetProductDetailReset:
      return { product: {} };
    default:
      return state;
  }
};
