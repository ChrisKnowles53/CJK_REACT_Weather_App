import React from "react";
import "./weatherCard.css";
import importAll from "../Icons/icons.js";
import DetailWeatherCard from "../DetailWeatherCard/DetailWeatherCard.jsx";

const images = importAll();
const importedPngs = import.meta.glob("../../V2_icons/**/*.png", {
  eager: true,
  import: "default",
});
const iconMap = Object.fromEntries(
  Object.entries(importedPngs).map(([path, url]) => [
    path.split("/").pop(),
    url,
  ])
);

function WeatherCard({ weatherData, dayIndex }) {
  if (!weatherData?.timelines?.daily?.[dayIndex]?.values) {
    return null;
  }

  const values = weatherData.timelines.daily[dayIndex].values;
  const maxTemp = Math.round(values.temperatureMax);
  const minTemp = Math.round(values.temperatureMin);

  const dateObj = new Date(weatherData.timelines.daily[dayIndex].time);
  const plainDate = dateObj.toLocaleDateString(undefined, { weekday: "long" });
  const today = new Date().toLocaleDateString(undefined, { weekday: "long" });

  const weatherCodeMax = values.weatherCodeMax;
  console.log("weatherCodeMax:", weatherCodeMax);

  const icon = iconMap[`${weatherCodeMax}.png`];

  return (
    <div className="cardContainer">
      <div className="weatherCard">
        <p className="dayHeading">
          {plainDate === today ? "Today" : plainDate}
        </p>
        <div className="iconAndTemp">
          {icon ? (
            <img src={icon} alt="weather icon" className="iconImage" />
          ) : (
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              no icon {weatherCodeMax}
            </div>
          )}
          <div className="tempContainer">
            <p className="temp">{maxTemp}&deg;C</p>
            <p className="temp">{minTemp}&deg;C</p>
          </div>
        </div>
      </div>

      <div className="DetailWeatherCard">
        <DetailWeatherCard weatherData={weatherData} dayIndex={dayIndex} />
      </div>
    </div>
  );
}

export default WeatherCard;
