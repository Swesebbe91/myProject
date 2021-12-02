import React from "react";
import "./Cards.css";
import Button from "./Button";
const cards = ({ image, header, paragraph }) => {
  return (
    <div className="Card-class card-width">
      <img src={image} alt="Picture of a runner" className="img-size" />
      <div class="card-text-container ">
        <h2 class="text-center text-bg-color"> {header} </h2>
        <p class="test-try text-bg-color">{paragraph}</p>
      </div>
    </div>
  );
};

export default cards;
