import React from "react";
import "./HourWeather.css";
import ImportAll from "../Icons/icons";

const images = ImportAll(
  require.context("../../V2_icons/small/png", true, /\.png$/)
);

// ✅the JSON weatherData contains 5 days of hourly data - Therefore I need to filter based on the next 24hours
// Filter on date
// display detail of this hour plus the next 2 hours
// carousel for the hours left of today
// Have a button for next day so it takes the user to the next day
// On next day display the current hour of today with previous hour and next hour with a carousel that goes both directions

// then need to make this appear on a seperate page when the user clicks on the DetailWeatherCard

export default function next24Hours({ weatherData }) {
  let now = new Date(); // Getting current date and time
  let nextDay = new Date(); // Getting the date and time 24 hours later
  nextDay.setHours(now.getHours() + 24);

  // Filtering the data
  let hourlyData = weatherData.timelines.hourly.filter((item) => {
    let itemDate = new Date(item.time); // Parsing item's time
    return itemDate >= now && itemDate <= nextDay; // Checking if item's time is between now and the next 24 hours
  });

  console.log(hourlyData); // see below for hourlyData format

  let compassDirection = ""; //creating a block scope variable
  // Main Program
  function compassDirectionConversion(hourlyData) {
    const sector = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
      "N",
    ]; // N can be 0deg or 360Deg so it is included twice in the array to capture this edge case.
    let windDirection = hourlyData.values.windDirection;
    compassDirection = sector[Math.round(windDirection / 22.5)]; // Rounds the wind direction out into 17 sectors. Sectors 0 and 16 are both N.  we could add more granularity by adding more sectors and changing the divisor according to howe many sectors we have chosen to use.
    return compassDirection;
  }

  return (
    <div>
      {hourlyData.map((hourlyData, index) => (
        <div key={index}>
          <h3>Time: {hourlyData.time}</h3>
          <h3>Temp: {hourlyData.values.temperature}</h3>
          <h3>Humidity: {hourlyData.values.humidity}</h3>
          <h3>Rain: {hourlyData.values.precipitationProbability}</h3>
          <h3>Wind Speed: {hourlyData.values.windSpeed}</h3>
          <h3>Wind Gust: {hourlyData.values.windGust}</h3>
          <h3>Wind Direction: {hourlyData.values.windDirection}</h3>
          <h3>Wind Compass: {compassDirectionConversion(hourlyData)}</h3>
        </div>
      ))}
    </div>
  );
}

// hourly data is an array of arrays 0 to 24
// each array is one hour in this format:
// { time: '2021-03-16T12:00:00Z',
//   values: {cloudBase:0.67
// cloudCeiling:0.71
// cloudCover:100
// dewPoint:6.44
// evapotranspiration:0.1
// freezingRainIntensity:0
// humidity:69.74
// iceAccumulation:0
// iceAccumulationLwe:0
// precipitationProbability:0
// pressureSurfaceLevel:1027.32
// rainAccumulation:0
// rainAccumulationLwe:0
// rainIntensity:0
// sleetAccumulation:0
// sleetAccumulationLwe:0
// sleetIntensity:0
// snowAccumulation:0
// snowAccumulationLwe:0
// snowIntensity:0
// temperature:11.78
// temperatureApparent:11.78
// uvHealthConcern:0
// uvIndex:0
// visibility:16
// weatherCode:1001
// windDirection:57.01
// windGust:12.45
// windSpeed:7.37
//}
