import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../store/products";
import { useParams } from "react-router-dom";
import "./IndividualProduct.css";

const IndividualProduct = () => {
  const dispatch = useDispatch();
  const product = useParams();
  const productInfo = useSelector((state) => state.products);
  const productId = parseInt(product.id);
  const photos = productInfo.photos;

  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, [dispatch]);

  const photosArr = [];
  const photoArrMapper = (photosArr) => {
    if (photos) {
      if (photos.length > 1) {
        photos.map((product) => {
          photosArr.push(product.photoKey);
        });
      } else {
        console.log("photo push for one", photos[0].photoKey);
        photosArr.push(photos[0].photoKey);
      }
    }
    return photosArr;
  };

  console.log("photoArr function", photoArrMapper(photosArr));

  return (
    <>
      <div className="imageContainer">
        photos and description of product
        <div>
          {/* <img src={getPhotos()} className="productImages" /> */}
          photo
        </div>
        <div></div>
        <div>cool map of climate and stuff</div>
      </div>
    </>
  );
};

export default IndividualProduct;
