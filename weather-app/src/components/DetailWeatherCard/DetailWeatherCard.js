import React from "react";
import "./DetailWeatherCard.css";
// import icon from '../../V2_icons/small/png/1001.png'

import ImportAll from "../Icons/icons";
const images = ImportAll(
  require.context("../../V2_icons/small/png", true, /\.png$/)
);
// let icon = 1001

function DetailWeatherCard({ weatherData, dayIndex }) {
  const maxTemp = Math.round(
    weatherData.timelines.daily[dayIndex].values.temperatureMax
  );
  const minTemp = Math.round(
    weatherData.timelines.daily[dayIndex].values.temperatureMin
  );
  const avgHumidity = Math.round(
    weatherData.timelines.daily[dayIndex].values.humidityAvg
  );
  const probabilityRain = Math.round(
    weatherData.timelines.daily[dayIndex].values.precipitationProbabilityAvg
  );
  const avgWindSpeed =
    weatherData.timelines.daily[dayIndex].values.windSpeedAvg;

  const dateString = weatherData.timelines.daily[dayIndex].time;
  const dateObj = new Date(dateString);
  const plainDate = dateObj.toLocaleDateString(undefined, { weekday: "long" });
  const today = new Date().toLocaleDateString(undefined, { weekday: "long" });

  const weatherCodeMax =
    weatherData.timelines.daily[dayIndex].values.weatherCodeMax;
  // console.log(weatherCodeMax)
  const icon = images[`./${weatherCodeMax}.png`];

  return (
    <div className="DetailWeatherCard">
      <p className="dayHeading">{plainDate === today ? "Today" : plainDate}</p>
      <div className="iconAndTemp">
        <img src={icon} alt="weather icon" className="iconImage" />
        <div className="tempContainer">
          <p className="temp">Max Temp:{maxTemp}&deg;C</p>
          <p className="temp">Min Temp:{minTemp}&deg;C</p>
          <p className="temp">Humidity:{avgHumidity}%</p>
          <p className="temp">Rain:{probabilityRain}%</p>
          <p className="temp">Wind:{avgWindSpeed}UNITS</p>
        </div>
      </div>
    </div>
  );
}

export default DetailWeatherCard;
