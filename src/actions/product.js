import * as api from "../apis/product";

export const getAllProducts = () => async (dispatch) => {
  const { data } = await api.getAllProducts();
  dispatch({ type: "GETPRODUCTS", payload: data });
};

export const deleteProduct = (id) => async (dispatch) => {
  await api.deleteProduct(id);
  dispatch({ type: "DELETE", payload: id });
};