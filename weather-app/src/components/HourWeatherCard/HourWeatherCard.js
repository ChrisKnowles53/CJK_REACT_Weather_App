// Place holder for hourly data presentation

import React from "react";
import "./HourWeather.css";
import ImportAll from "../Icons/icons";

// the JSON weatherData contains 5 days of hourly data - Therefore I need to filter based on the next 24hours 
    // Filter on date 
// display detail of this hour plus the next 2 hours 
// carousel for the hours left of today
// Have a button for next day so it takes the user to the next day
// On next day display the current hour of today with previous hour and next hour with a carousel that goes both directions

// then need to make this appear on a seperate page when the user clicks on the DetailWeatherCard


const images = ImportAll(
  require.context("../../V2_icons/small/png", true, /\.png$/)
);

function HourWeatherCard({ weatherData, dayIndex }) {
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
  const avgWindSpeed = Math.round(
    weatherData.timelines.daily[dayIndex].values.windSpeedAvg * 10) / 10;
  
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
          <p className="temp">Max Temp: {maxTemp}&deg;C</p>
          <p className="temp">Min Temp: {minTemp}&deg;C</p>
          <p className="temp">Humidity: {avgHumidity}%</p>
          <p className="temp">Rain: {probabilityRain}%</p>
          <p className="temp">Wind: {avgWindSpeed} mph</p>
        </div>
      </div>
    </div>
  );
}

export default HourWeatherCard;