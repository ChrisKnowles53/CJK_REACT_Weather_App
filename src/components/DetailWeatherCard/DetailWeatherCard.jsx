import React from "react";
import "./DetailWeatherCard.css";
import importAll from "../Icons/icons.js";

const images = importAll();

export default function DetailWeatherCard({ weatherData, dayIndex }) {
  const daily = weatherData?.timelines?.daily;
  const values = daily?.[dayIndex]?.values;
  const time = daily?.[dayIndex]?.time;

  if (!values || !time) return null;

  const maxTemp = Math.round(values.temperatureMax);
  const minTemp = Math.round(values.temperatureMin);
  const avgHumidity = Math.round(values.humidityAvg);
  const probabilityRain = Math.round(values.precipitationProbabilityAvg);
  const avgWindSpeed = Math.round(values.windSpeedAvg * 10) / 10;

  const dateObj = new Date(time);
  const plainDate = dateObj.toLocaleDateString(undefined, { weekday: "long" });
  const today = new Date().toLocaleDateString(undefined, { weekday: "long" });

  const weatherCodeMax = values.weatherCodeMax;
  const icon = images[`${weatherCodeMax}.png`];

  return (
    <div className="DetailWeatherCard">
      <p className="dayHeading">{plainDate === today ? "Today" : plainDate}</p>
      <div className="iconAndTemp">
        {icon ? (
          <img src={icon} alt="weather icon" className="iconImage" />
        ) : (
          <div style={{ fontSize: 12, opacity: 0.7 }}>
            no icon {weatherCodeMax}
          </div>
        )}
        <div className="tempContainer">
          <p className="temp">Max Temp: {maxTemp}°C</p>
          <p className="temp">Min Temp: {minTemp}°C</p>
          <p className="temp">Humidity: {avgHumidity}%</p>
          <p className="temp">Rain: {probabilityRain}%</p>
          <p className="temp">Wind: {avgWindSpeed} mph</p>
        </div>
      </div>
    </div>
  );
}
