import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../store/products";
import { useParams } from "react-router-dom";
import "./IndividualProduct.css";
import userProductsReducer, {
  getReviewsRatings,
} from "../../store/userProducts";

const IndividualProduct = () => {
  const dispatch = useDispatch();
  const product = useParams();
  const productInfo = useSelector((state) => state.products);
  const userProducts = useSelector((state) => state.userProducts);
  const photos = productInfo.photos;
  const productId = parseInt(product.id);
  const [imagePosition, setImagePosition] = useState("");

  useEffect(() => {
    dispatch(getReviewsRatings(productId));
    dispatch(getOneProduct(productId));
  }, [dispatch]);
  const reviewsArr = [];
  const photosArr = [];
  const reviewsArrMapper = (arr) => {
    if (userProducts) {
      if (userProducts.length > 1) {
        userProducts.map((entry) => {
          arr.push(entry);
        });
      } else {
        arr.push(userProducts[0]);
      }
    }
    return arr;
  };
  console.log(
    "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
    reviewsArrMapper(reviewsArr)
  );
  const photoArrMapper = (arr) => {
    if (photos) {
      if (photos.length > 1) {
        photos.map((product) => {
          arr.push(product.photoKey);
        });
      } else {
        arr.push(photos[0].photoKey);
      }
    }
    return arr.map((photo) => {
      return (
        <>
          <div>
            <img src={photo} className="productImages" key={photo.id} />
          </div>
        </>
      );
    });
  };

  return (
    <>
      {userProducts && productInfo && (
        <div>
          <div className="imageContainer">
            <div>{productInfo.name}</div>
            <div className="image-grid">{photoArrMapper(photosArr)}</div>
            <div>{productInfo.description}</div>
            {/* <div>{reviewsArrMapper(reviewsArr)}</div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualProduct;
