import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import { getAllProduct } from "../../store/products";
import { buyProducts } from "../../store/shoppingCart";
import "./cart.css";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const loaded = useSelector((state) => state.session.loaded);
  const getItems = Object.values(sessionStorage);
  console.log("getItem", getItems);
  useEffect(() => {
    dispatch(buyProducts(getItems));
  }, [dispatch]);

  return loaded && user ? (
    <>
      <div className="page-container">
        <div>hello world</div>
        <div> hullo world</div>
      </div>
    </>
  ) : loaded ? (
    <Redirect to="/login" />
  ) : null;
};

export default ShoppingCart;
