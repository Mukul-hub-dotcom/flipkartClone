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