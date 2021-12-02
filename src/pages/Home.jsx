import React, { useState } from "react";
import Cards from "./Cards";
import "./Home.css";
import image from "../pages/Components/Images/IMG_8353.JPG";
import Button from "./Button";
const Home = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <div className="bg-image test position-relative">
        <h2 className="font-style ml-sm  ">Sunset Run Malmö</h2>
        <p className="text-position position-absoulute text-style">
          Malmös <span style={{ textDecoration: "Underline" }}>vackraste</span>{" "}
          motionslopp!
        </p>
      </div>
      <div className="card-container">
        
        <Cards image={image} header={"Anmälan"} paragraph={"Hej mitt namn är sven, jag är 15 år vad vill du mig?"} />
       
        <Cards image={image} header={"heffeef"} paragraph={""} />
      </div>

      <button onClick={() => setValue((prev) => (prev += 1))}>
        SÄTTA ANMÄLAN
      </button>
    </div>
  );
};

export default Home;
