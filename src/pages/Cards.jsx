import React, { useContext, useState } from "react";
import "./Cards.css";
import Button from "./Button";
import { countContext } from "../App";

const Cards = ({
  image,
  alt,
  header,
  paragraph,
  buttonName,
  buttonBackside,
  headerBackside,
  paragraphBackside,
  secondButton,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [count, setCount] = useContext(countContext);

  function handleClick() {
    setIsFlipped((isFlipped) => !isFlipped);
  }

  function addCount() {
    setCount((prev) => (prev += 1));
  }

  return (
    <div className="">
      {isFlipped ? (
        <div className="Card-class">
          <div class="card-text-container center-align ">
            <h2 class="head-size"> {headerBackside} </h2>
            <p class="text-size">{paragraphBackside}</p>
            {/* SKAPA En knapp för att lägga till deltagare på kort2*/}

            {buttonName && (
              <Button name={buttonBackside} onClicked={handleClick} />
            )}

            {secondButton && (
              <Button name={secondButton} onClicked={addCount} />
            )}
            {console.log(count)}
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
