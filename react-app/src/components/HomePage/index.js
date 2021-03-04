import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";

const HomePage = () => {
  const [test, setTest] = useState("hidden");
  const tester = () => {
    if (test === "") {
      setTest("hidden");
    } else {
      setTest("");
    }
  };
  return (
    <>
      <div className={test === "hidden" ? "hidden" : ""}>
        hello worlddddddddddddd
      </div>
      <button onClick={() => tester()}>whats up</button>
      <div className="rounded-img-container">
        <img
          src="https://andromedaplants.s3.amazonaws.com/plonts/agnata+red.jpg"
          className="test"
        />
      </div>
    </>
  );
};

export default HomePage;
