import React, { useContext, useState } from "react";
import "./Cards.css";
import Button from "./Button";
import { countContext, formContext } from "../../App";
import Form from "./Form";

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
  secondParagraphBack,
  thirdParagraphBack,
  fourthParagraphBack,
  aTag,
  link,
  test,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [form, setForm] = useContext(formContext);
  const [count, setCount] = useContext(countContext);

  function handleClick() {
    setIsFlipped((isFlipped) => !isFlipped);
  }

  function addCount() {
    setCount((prev) => (prev += 1));
    addForm();
  }

  function addForm() {
    const finalArray = [...form, <Form />];
    setForm(finalArray);
  }

  return (
    <div className="">
      {isFlipped ? (
        <div className="Card-class">
          <div className="card-text-container center-align ">
            <h2 className="head-size"> {headerBackside} </h2>
            <p className="text-size">{paragraphBackside}</p>

            {/* SKAPA En knapp för att lägga till deltagare på kort2*/}

            {buttonName && (
              <Button name={buttonBackside} onClicked={handleClick} />
            )}

            {secondButton && (
              <Button name={secondButton} onClicked={addCount} />
            )}
          </div>
        </div>
      ) : (
        <div className="Card-class">
          <img src={image} alt={alt} className="img-size" />
          <div className="card-text-container center-align ">
            <h2 className="head-size"> {header} </h2>
            <p className="text-size">{paragraph}</p>
            {buttonName && <Button name={buttonName} onClicked={handleClick} />}
            <a href={link}>{aTag}</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
