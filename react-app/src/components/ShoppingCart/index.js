import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getAllProduct } from "../../store/products";
import { buyProducts } from "../../store/shoppingCart";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const getItems = Object.values(sessionStorage);
  console.log("getItem", getItems);
  useEffect(() => {
    // dispatch(getAllProduct);
    dispatch(buyProducts(getItems));
  }, []);
  // const allProducts = useSelector((state) => state.products);

  const cartMapper = () => {
    dispatch(buyProducts);
  };

  return (
    <>
      <div>hello world</div>
      <div>{cartMapper()}</div>
    </>
  );
};

export default ShoppingCart;
