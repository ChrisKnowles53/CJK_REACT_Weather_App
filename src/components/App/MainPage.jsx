import React, { useEffect, useState } from "react";
import SearchBar from "../Input/input.jsx";
import WeatherCard from "../WeatherCard/weatherCard.jsx";
import poweredBy from "../../Images/powered-by-tomorrow/Powered_by_Tomorrow-White.png";

const API_KEY = import.meta.env.VITE_API_KEY;

const mockWeatherData = {
  timelines: {
    daily: [
      {
        time: new Date().toISOString(),
        values: {
          temperatureMax: 21,
          temperatureMin: 12,
          weatherCodeMax: 1000,
        },
      },
      {
        time: new Date(Date.now() + 86400000).toISOString(),
        values: {
          temperatureMax: 20,
          temperatureMin: 11,
          weatherCodeMax: 1001,
        },
      },
      {
        time: new Date(Date.now() + 2 * 86400000).toISOString(),
        values: {
          temperatureMax: 19,
          temperatureMin: 10,
          weatherCodeMax: 1000,
        },
      },
      {
        time: new Date(Date.now() + 3 * 86400000).toISOString(),
        values: { temperatureMax: 18, temperatureMin: 9, weatherCodeMax: 1001 },
      },
      {
        time: new Date(Date.now() + 4 * 86400000).toISOString(),
        values: { temperatureMax: 17, temperatureMin: 8, weatherCodeMax: 1000 },
      },
    ],
  },
};

function capitalizeInput(input) {
  const postcodeRegex = /^[a-zA-Z]{1,2}\d{1,2}/;
  if (postcodeRegex.test(input))
    return input.match(postcodeRegex)[0].toUpperCase();
  if (/^[a-zA-Z\s]+$/.test(input)) {
    return input
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  }
  return input
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .replace(/\b[a-zA-Z0-9]+\b/g, (m) => m.toUpperCase());
}

export default function MainPage() {
  const [city, setCity] = useState("London,UK");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function getWeather() {
      try {
        const url = `https://api.tomorrow.io/v4/weather/forecast?location=${encodeURIComponent(
          city
        )}&apikey=${API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
        const data = await res.json();
        if (!cancelled) setWeatherData(data);
      } catch (e) {
        console.error("fetch weather failed:", e);
        if (!cancelled) setWeatherData(null);
      }
    }
    getWeather();
    return () => {
      cancelled = true;
    };
  }, [city]);

  const dataToShow = weatherData ?? mockWeatherData;

  const handleSearch = (term) => {
    if (term && term.trim()) setCity(capitalizeInput(term.trim()));
  };

  return (
    <div>
      <div className="searchBar">
        <SearchBar onSearch={handleSearch} defaultValue={city} />
      </div>

      <p className="city">{capitalizeInput(city)}</p>

      <div className="today">
        <WeatherCard weatherData={dataToShow} dayIndex={0} />
      </div>

      <div className="forecast">
        {dataToShow?.timelines?.daily?.slice(1, 5)?.map((day, idx) => (
          <WeatherCard key={idx} weatherData={dataToShow} dayIndex={idx + 1} />
        ))}
      </div>

      <div className="poweredBy">
        <a
          href="https://www.tomorrow.io/weather-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={poweredBy} alt="Powered by Tomorrow" />
        </a>
      </div>
    </div>
  );
}
