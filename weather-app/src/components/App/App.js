import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import WeatherCard from '../WeatherCard/weatherCard';

let apiKey = `IA7w4QOpYihHr7eC23DrVBhm5OIcgIqh`
let city = `London`
let dayIndex = 0

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function getWeather() {
      
      // i would like to validate the input here so that it is a valid city name and not a number or something else
      const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`)
      const weatherData = await response.json()
      setWeatherData(weatherData)
    }

    getWeather()
  }, []);


  return (
    <div className="App">
      <p>Powered by <a href="https://www.tomorrow.io/weather-api">Tomorrow.io</a></p>
      <br></br>
      {weatherData && (
      <WeatherCard weatherData = {weatherData} dayIndex = {dayIndex}/>
      )}
    </div>
  );
};

export default App;

{/* <Input handleSubmit={handleSubmit} data={data} setData={setData} /> */}