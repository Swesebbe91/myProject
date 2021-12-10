import React from "react";
import "./WeatherHolder.css";
import sunPic from "./Images/113.png";
import rainPic from "./Images/296.png";

const WeatherHolder = ({
  datum,
  feelsLike,
  temperatur,
  sunUp,
  sunDown,
  temp,
  vind,
  rain,
  cloud,
  riskForRain,
 
}) => {
  return (
    <div className="flex-section">
      <h2>Stad: Malmö </h2>
      <h2>Datum: {datum}</h2>
      <p>Medeltemperaturen ser ut att bli: {temperatur}°C</p>
      <p>Solen går upp: {sunUp}</p>
      <p>Solen går ner: {sunDown}</p>
      <p> Temperaturen ser ut att bli: {temp}°C kl 12 </p>
      <p> Känns som... {feelsLike}°C </p>
      <p> Molnigheten blir: {cloud}% </p>

      {rain ? (
        <div className="flex-weather-condition-column">
          <div className="flex-weather-condition">
            <img src={rainPic} />{" "}
            <p>
              Det kommer regna...<br></br>Chansen till regn är: {riskForRain}%
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-weather-condition-column">
          <div className="flex-weather-condition">
            <img src={sunPic} />{" "}
            <p>
              Det kommer nog inte regna...<br></br>Chansen till regn är:{" "}
              {riskForRain}%
            </p>
          </div>
        </div>
      )}
      <p>Förväntad maxvind under dagen {vind} km/h</p>
    </div>
  );
};

export default WeatherHolder;
