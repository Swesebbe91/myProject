import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherHolder from "./WeatherHolder";

const baseUrl =
  "http://api.weatherapi.com/v1/forecast.json?key=0a69b96d0e73429ab21221821210712&q=Malmö&days=3&aqi=no&alerts=no";

const Weather = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      const getData = response.data; //Skriver över till "get Data"
      const forecast = getData.forecast; //hämtar ut objektet forecast
      const myObj = forecast.forecastday; //En array som innehåller 3 objekt

      setData(myObj);
    });
  }, []);

  return (
    <div className="">
      <h2 className="header-section">Väderprognos för kommande tre dagar</h2>
      <div className="weather-section">
        {data.map((item, i) => (
          <WeatherHolder
            key={i}
            datum={item.date}
            temperatur={item.day.avgtemp_c}
            sunUp={item.astro.sunrise}
            sunDown={item.astro.sunset}
            temp={item.hour[12].temp_c}
            vind={item.day.maxwind_kph}
            feelsLike={item.hour[12].feelslike_c}
            clock={item.hour[12].time.substring(10,16)}
            rain={item.hour[12].will_it_rain}
            riskForRain={item.hour[12].chance_of_rain}
            cloud={item.hour[12].cloud}
           
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
