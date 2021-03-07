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
  const ratingsArr = [];
  const photosArr = [];
  const reviewsArrMapper = (arr) => {
    if (userProducts) {
      userProducts.map((entry) => {
        arr.push(entry);
      });
      return arr.map((entry) => {
        return (
          <>
            <div key={entry.id}>
              <div>{entry.reviews}</div>
              <div>{entry.ratings}</div>
              <div>{entry.user.username}</div>
            </div>
          </>
        );
      });
    }
  };
  const photoArrMapper = (arr) => {
    if (photos) {
      photos.map((product) => {
        arr.push(product.photoKey);
      });
    }
    return arr.map((photo) => {
      return (
        <>
          <div key={arr.id}>
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
            <div>{reviewsArrMapper(reviewsArr)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualProduct;
