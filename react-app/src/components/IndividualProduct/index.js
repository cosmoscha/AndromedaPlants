import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct, makeReview } from "../../store/products";
import { useParams } from "react-router-dom";
import "./IndividualProduct.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  useEffect(() => {
    dispatch(getReviewsRatings(productId));
    dispatch(getOneProduct(productId));
  }, [dispatch]);

  const reviewsArr = [];
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
  const handleDragStart = (e) => e.preventDefault();
  const photoArrMapper = (arr) => {
    if (photos) {
      photos.map((product) => {
        arr.push(product.photoKey);
      });
    }
    arr = arr.map((photo) => {
      return (
        <>
          <img
            src={photo}
            className="productImages"
            key={photo.id}
            onDragStart={handleDragStart}
          />
        </>
      );
    });
    console.log();
    return <AliceCarousel mouseTracking items={arr} />;
  };

  // const updateReview = (e) => {
  //   setReview(e.target.value);
  // };
  // const updateRating = (e) => {
  //   setRating(e.target.value);
  // };

  const submitReview = (e) => {
    e.preventDefault();
    console.log("sent dispatch");
    const formValues = { id: productId, review: review, rating: rating };
    console.log(formValues);
    dispatch(makeReview(formValues));
  };

  const addProduct = (e) => {
    e.preventDefault();
    console.log("adding to sessionStore");
    sessionStorage.setItem(`productId ${productId}`, JSON.stringify(productId));
    console.log(
      "whats in the session store right now",
      Object.values(sessionStorage)
    );
  };

  const ratings = [1, 2, 3, 4, 5];

  return (
    <>
      {userProducts && productInfo && (
        <div className="page-container">
          <div className="imageContainer">
            <div>{productInfo.name}</div>
            <div className="image-grid">{photoArrMapper(photosArr)}</div>
            <div className="image-grid"></div>
            <div>{productInfo.description}</div>
            <div className="reviews-grid">{reviewsArrMapper(reviewsArr)}</div>
            <div>
              <button onClick={addProduct}>
                idk yet, shopping cart probably
              </button>
            </div>
            <form onSubmit={submitReview}>
              <input
                onChange={(e) => setReview(e.target.value)}
                value={review}
                placeholder="add your review"
              ></input>
              <select
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              >
                {ratings.map((rating) => (
                  <option value={rating} key={rating}>
                    {rating}
                  </option>
                ))}
              </select>
              <button id={review.id} type="submit">
                submit review
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualProduct;
