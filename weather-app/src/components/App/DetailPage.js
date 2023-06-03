import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HourWeatherCard from "../HourWeatherCard/HourWeatherCard";
import { Routes, Route } from "react-router-dom";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

function DetailPage() {
  let { dayIndex } = useParams();
  dayIndex = parseInt(dayIndex);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${REACT_APP_API_KEY}`
      );
      const weatherData = await response.json();
      console.log(weatherData);
      setWeatherData(weatherData);
    }

    getWeather();
  }, [city, dayIndex]);

  return (
    <div>{weatherData && <HourWeatherCard weatherData={weatherData} />}</div>
  );
}

export default DetailPage;
