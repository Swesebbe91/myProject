import React from "react";
import "./Cards.css";
import Button from "./Button";
const Cards = ({ image, alt, header, paragraph, buttonName, headerBackside, paragraphBackside, onClicked, flip }) => {

   
  return (
    <div className="">
        
        {flip ?<div><h2 class="head-size"> {headerBackside} </h2><p class="text-size">{paragraphBackside}</p>
         {buttonName&&<Button name={buttonName} onClicked={onClicked}/>}
        </div>
        
        :
        <div className="Card-class">
        <img src={image} alt={alt} className="img-size" /><div class="card-text-container center-align ">
                    <h2 class="head-size"> {header} </h2>
                    <p class="text-size">{paragraph}</p>
                    {buttonName&&<Button name={buttonName} onClicked={onClicked}/>}
                </div></div>
        
      }
       
   

    </div>
  );
};

export default Cards;
