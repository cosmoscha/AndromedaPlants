import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../store/products";
import "./IndividualProduct.css";

const IndividualProduct = () => {
  const dispatch = useDispatch();
  // const product = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getOneProduct(1));
  }, [dispatch]);

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default IndividualProduct;
