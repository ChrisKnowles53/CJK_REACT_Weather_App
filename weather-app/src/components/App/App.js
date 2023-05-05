import './App.css';
import React, { useState, useEffect } from 'react';
import WeatherCard from '../WeatherCard/weatherCard';


let apiKey = `IA7w4QOpYihHr7eC23DrVBhm5OIcgIqh`;
let city = `London`;

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function getWeather() {
      if (!weatherData) { // this and the useEffect dependency stop me from hitting the API too many times whilst i develop the app.
      const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`);
      const weatherData = await response.json();
      console.log(weatherData);
      setWeatherData(weatherData);
      }
    }

    getWeather();
  }, [weatherData]);

  return (
    <>
      <p>Powered by <a href="https://www.tomorrow.io/weather-api">Tomorrow.io</a></p>

      <div className="mainContainer">
        <div className="mainDisplay">
          {weatherData && weatherData.timelines.daily.map((day, index) => (
          <WeatherCard key={index} weatherData={weatherData} dayIndex={index} />
          ))}
      </div>
    </div>
    </>
  );
}

export default App;


{/* <Input handleSubmit={handleSubmit} data={data} setData={setData} /> */}