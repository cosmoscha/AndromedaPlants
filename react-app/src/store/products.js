const SET_ONE_PRODUCT = "products/setOneProduct";
const SET_ONE_REVIEW = "products/setOneReview";

const setOneProduct = (product) => {
  return {
    type: SET_ONE_PRODUCT,
    payload: product,
  };
};
const setOneReview = (review) => {
  return {
    type: SET_ONE_REVIEW,
    payload: review,
  };
};

export const getOneProduct = (id) => async (dispatch) => {
  let product = await fetch(`/api/products/${id}`);
  product = await product.json();
  dispatch(setOneProduct(product));
  return product;
};
export const makeReview = ({ id, review, rating }) => async (dispatch) => {
  console.log("awewewe33434", id, review, rating);
  let sentReview = await fetch(`/api/products/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reviews: review,
      ratings: rating,
    }),
  });
  const parsedReview = await sentReview.json();
  console.log("parsedReview", parsedReview);
  dispatch(setOneReview(parsedReview));
  return parsedReview;
};

const initialState = [];

const productsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_ONE_PRODUCT:
      newState = action.payload;
      return newState;
    case SET_ONE_REVIEW:
      newState = action.payload.products;
      return newState;
    default:
      return state;
  }
};

export default productsReducer;
