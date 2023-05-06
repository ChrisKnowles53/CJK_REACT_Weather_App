import './App.css';
import React, { useState, useEffect } from 'react';
import WeatherCard from '../WeatherCard/weatherCard';
import SearchBar from '../Input/input';


let apiKey = `IA7w4QOpYihHr7eC23DrVBhm5OIcgIqh`;
//let city = `London`;

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");

  useEffect(() => {
    async function getWeather() {
      // if (!weatherData) { // this and the useEffect dependency stop me from hitting the API too many times whilst i develop the app.
      const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`);
      const weatherData = await response.json();
      console.log(weatherData);
      setWeatherData(weatherData);
      //}
    }

    getWeather();
  }, [city]);

function handleSearchClick(city) {
  setCity(city);
}

  return (
    <div>
      <p>Powered by <a href="https://www.tomorrow.io/weather-api">Tomorrow.io</a></p>
      <div className="mainContainer">
        <SearchBar handleSearchClick={handleSearchClick} />
        <div className="mainDisplay">
          <div className="today">
            {weatherData &&
            <WeatherCard weatherData={weatherData} dayIndex={0} />
            }
          </div>
          <div className="forecast">
            {weatherData && weatherData.timelines.daily.slice(1,5).map((day, index) => (
            <WeatherCard key={index} weatherData={weatherData} dayIndex={index +1} />
            ))}
          </div>
        </div>
      
      </div>
    </div>

  );
}

export default App;


{/* <Input handleSubmit={handleSubmit} data={data} setData={setData} /> */}