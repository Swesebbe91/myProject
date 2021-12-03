import React, { useState } from "react";
import "./Cards.css";
import Button from "./Button";
const Cards = ({
  image,
  alt,
  header,
  paragraph,
  buttonName,
  buttonBackside,
  headerBackside,
  paragraphBackside,
  test
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped((isFlipped) => !isFlipped);
  }

  return (
    <div className="">
      {isFlipped ? (
        <div className="Card-class">
          <div class="card-text-container center-align ">
            <h2 class="head-size"> {headerBackside} </h2>
            <p class="text-size">{paragraphBackside}</p>
            
            {/* SKAPA En knapp för att lägga till deltagare på kort2*/}
            {buttonName && <Button name={buttonBackside} onClicked={handleClick} />}
          </div>
        </div>
      ) : (
        <div className="Card-class">
          <img src={image} alt={alt} className="img-size" />
          <div class="card-text-container center-align ">
            <h2 class="head-size"> {header} </h2>
            <p class="text-size">{paragraph}</p>
            {buttonName && <Button name={buttonName} onClicked={handleClick} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
