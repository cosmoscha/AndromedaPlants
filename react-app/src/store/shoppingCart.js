const CHECKOUT = "shoppingCart/checkout";

const checkout = (products) => {
  return {
    type: CHECKOUT,
    payload: products,
  };
};

export const buyProducts = (getItems) => async (dispatch) => {
  console.log("this is what you send to the server", getItems);
  let boughtProducts = await fetch(`/api/products/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      getItems: getItems,
    }),
  });
  boughtProducts = await boughtProducts.json();
  console.log("bought products", boughtProducts);
  // dispatch(boughtProducts);
  return boughtProducts;
};

const initialState = [];

const checkoutReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case CHECKOUT:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default checkoutReducer;
