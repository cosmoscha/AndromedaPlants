import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct, makeReview } from "../../store/products";
import { useParams, Redirect, useHistory } from "react-router-dom";
import "./IndividualProduct.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import userProductsReducer, {
  getReviewsRatings,
} from "../../store/userProducts";

const IndividualProduct = () => {
  const dispatch = useDispatch();
  const product = useParams();
  const history = useHistory();
  const productInfo = useSelector((state) => state.products);
  const quantity = useSelector((state) => state.products.quantity);
  const userProducts = useSelector((state) => state.userProducts);
  const user = useSelector((state) => state.session.user);
  const loaded = useSelector((state) => state.session.loaded);
  const photos = productInfo.photos;
  const productId = parseInt(product.id);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getReviewsRatings(productId));
    dispatch(getOneProduct(productId));
  }, [dispatch]);

  useEffect(() => {
    if (quantity) {
      setCount(quantity);
    }
  }, [setCount, quantity]);
  console.log("counttttttttttttttt", count);

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

  const submitReview = (e) => {
    // e.preventDefault();
    console.log("sent dispatch");
    const formValues = { id: productId, review: review, rating: rating };
    console.log(formValues);
    dispatch(makeReview(formValues));
  };

  const addProduct = (e) => {
    // e.preventDefault();
    const val = { userId: user.id, productId: productId, quantity: count };
    console.log("adding to sessionStore");
    sessionStorage.setItem(`productId ${productId}`, JSON.stringify(val));
    console.log(
      "whats in the session store right now",
      Object.values(sessionStorage)
    );
    history.push("/shoppingCart");
  };

  const ratings = [1, 2, 3, 4, 5];
  const quantityDecreaser = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return loaded && user ? (
    <>
      {userProducts && productInfo && (
        <div className="page-container">
          <div className="imageContainer">
            <div>{productInfo.name}</div>
            <div className="image-grid">{photoArrMapper(photosArr)}</div>
            <div>
              <div>{count}</div>
              <button>ssssss</button>
              <button></button>
            </div>
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
  ) : loaded ? (
    <Redirect to="/login" />
  ) : null;
};

export default IndividualProduct;
