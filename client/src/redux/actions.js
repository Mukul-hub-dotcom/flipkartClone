import axios from "axios";
import * as actionTypes from "./constant";

const URL = "http://localhost:8000";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`${URL}/products`);
      dispatch({ type: actionTypes.GetProductSuccess, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.GetProductFail, payload: error.message });
    }
  };
};
export const getProductDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GetProductDetailRequest });
      const { data } = await axios.get(`${URL}/product/${id}`);
      dispatch({ type: actionTypes.GetProductDetailSuccess, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.GetProductDetailFail,
        payload: error.message,
      });
    }
  };
};
