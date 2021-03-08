import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductTag } from "../../store/tags";
import "./ProductPage.css";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.tags.products);
  console.log("qweqweqweqwe", products);
  const tagId = parseInt(useParams().id);

  useEffect(() => {
    dispatch(getProductTag(tagId));
  }, [dispatch]);

  const productMapper = (arr) => {
    if (products) {
      if (products.length) {
        arr = arr.map((product) => {
          const secondArr = product.photos[0];
          return (
            <>
              <div key={product.id} className="product-container">
                <img src={secondArr.photoKey} className="productImages2" />
                <div>{product.name}</div>
                <div>quantity: {product.quantity}</div>
              </div>
            </>
          );
        });
      }
    }
    return arr;
  };

  console.log("ssssssssssssswwwwsssss", productMapper(products));

  return (
    <>
      {products && (
        <div className="image-grid-container">
          <div className="image-grid">{productMapper(products)}</div>
        </div>
      )}
    </>
  );
};
export default ProductPage;