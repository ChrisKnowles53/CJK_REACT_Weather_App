import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

apiKey = `IA7w4QOpYihHr7eC23DrVBhm5OIcgIqh`


function App() {


  async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value;
  
    // i would like to validate the input here so that it is a valid city name and not a number or something else


    const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`)
    const weatherData = await response.json()
    console.log(weatherData)

    const maxTemp = weatherData.timelines.daily[0].values.temperatureMax
    const minTemp = weatherData.timelines.daily[0].values.temperatureMin
    const avgTemp = weatherData.timelines.daily[0].values.temperatureAvg
    const weatherCodeMax = weatherData.timelines.daily[0].values.weatherCodeMax
    const weatherCodeMin = weatherData.timelines.daily[0].values.weatherCodeMin

    const maxTempElement = document.getElementById("maxTemp");
    maxTempElement.textContent = maxTemp;

    const minTempElement = document.getElementById("minTemp");
    minTempElement.textContent = minTemp;

    const avgTempElement = document.getElementById("avgTemp");
    avgTempElement.textContent = avgTemp;

    const weatherCodeMaxElement = document.getElementById("weatherCodeMax");
    weatherCodeMaxElement.textContent = weatherCodeMax;

    const weatherCodeMinElement = document.getElementById("weatherCodeMin");
    weatherCodeMinElement.textContent = weatherCodeMin;
}


  return (
    <div className="App">
      <p>Powered by <a href="https://www.tomorrow.io/weather-api">Tomorrow.io</a></p>
      <br></br>
      
      <WeatherCard props = {props}/>
      <Input handleSubmit={handleSubmit} data={data} setData={setData} />
      
    </div>
  );
};

export default App;
