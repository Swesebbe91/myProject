import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherHolder from "./WeatherHolder";

const baseUrl =
  "http://api.weatherapi.com/v1/forecast.json?key=0a69b96d0e73429ab21221821210712&q=Malmö&days=3&aqi=no&alerts=no";

const Weather = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState([])
  const [together, setTogether] = useState([])
  //console.log(location.name)
 

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      console.log(response.data) //All data
      const getData = response.data //Skriver över till "get Data"
      const locations = getData.location //Hämtar ut objetet location
      setLocation(locations) //Sätter location
      
      const forecast = getData.forecast //hämtar ut objektet forecast 
      const myObj = forecast.forecastday //En array som innehåller 3 objekt
      setData(myObj) 
    });
  }, []);



  
  
  //setData(forecast)


  return (
    <div className="">
      <p>Wheater card</p>
      {data.map((item, i) => (
        <WeatherHolder
        key = {i}
        datum = {item.date}
        city = {location.name}
        temperatur = {item.day.maxtemp_c}
        test = {item.astro.sunrise}
        temp = {item.hour.temp_c}
      vind = {item.day.maxwind_kph}
         />
      ))}
    </div>
  );
};

export default Weather;
