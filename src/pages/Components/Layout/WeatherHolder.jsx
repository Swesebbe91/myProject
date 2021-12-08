import React from "react";
import "./WeatherHolder.css"

const Weather_holder = ({stad, datum, temperatur, test, temp, vind }) => {
  return (
    <div className="weather-section">
      <div className="flex-section">
        <h2>Stad: {stad} </h2>
        <h2>Datum: {datum}</h2>
        <p>Högsta temperaturen ser ut att bli: {temperatur}°C</p>
        <p>väderlek: {test}</p>
        <p> Medeltemperaturen ser ut att bli: {temp} </p>
        <p>Förväntad vind {vind}</p>
      </div>
    </div>
  );
};

export default Weather_holder;
