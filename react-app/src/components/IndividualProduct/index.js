import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../store/products";
import { useParams } from "react-router-dom";
import "./IndividualProduct.css";
import { getReviewsRatings } from "../../store/userProducts";

const IndividualProduct = () => {
  const dispatch = useDispatch();
  const product = useParams();
  const productInfo = useSelector((state) => state.products);
  const photos = productInfo.photos;
  const productId = parseInt(product.id);
  const [imagePosition, setImagePosition] = useState("");

  useEffect(() => {
    dispatch(getOneProduct(productId));
    dispatch(getReviewsRatings(productId));
  }, [dispatch]);

  const photosArr = [];
  const photoArrMapper = (photosArr) => {
    if (photos) {
      if (photos.length > 1) {
        photos.map((product) => {
          photosArr.push(product.photoKey);
        });
      } else {
        photosArr.push(photos[0].photoKey);
      }
    }
    return photosArr.map((photo) => {
      return (
        <div>
          <img src={photo} className="productImages" key={photo.id} />
        </div>
      );
    });
  };

  return (
    <>
      <div>
        <div className="imageContainer">
          <div>{productInfo.name}</div>
          <div className="image-grid">{photoArrMapper(photosArr)}</div>
          <div>{productInfo.description}</div>
        </div>
      </div>
    </>
  );
};

export default IndividualProduct;
