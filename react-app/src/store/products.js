const SET_ONE_PRODUCT = "products/setOneProduct";

const setOneProduct = (product) => {
  return {
    type: SET_ONE_PRODUCT,
    payload: product,
  };
};

export const getOneProduct = (id) => async (dispatch) => {
  let product = await fetch(`/api/products/${id}`);
  product = await product.json();
  dispatch(setOneProduct(product));
  return product;
};

const initialState = [];

const productsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_ONE_PRODUCT:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default productsReducer;
