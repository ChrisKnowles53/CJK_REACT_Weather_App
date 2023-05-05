import logo from '../../logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import WeatherCard from '../WeatherCard/weatherCard';

let apiKey = `IA7w4QOpYihHr7eC23DrVBhm5OIcgIqh`;
let city = `London`;

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`);
      const weatherData = await response.json();
      console.log(weatherData);
      setWeatherData(weatherData);
    }

    getWeather();
  }, []);

  return (
    <div className="App">
      <p>Powered by <a href="https://www.tomorrow.io/weather-api">Tomorrow.io</a></p>
      <br />

      {weatherData && weatherData.timelines.daily.map((day, index) => (
        <WeatherCard key={index} weatherData={weatherData} dayIndex={index} />
      ))}
    </div>
  );
}

export default App;
{/* <Input handleSubmit={handleSubmit} data={data} setData={setData} /> */}