import React, { useRef, useEffect } from "react";
import "./HourWeatherCard.css";
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

// then need to make this appear on a separate page when the user clicks on the DetailWeatherCard

export default function Next24Hours({ weatherData }) {
  let now = new Date(); // Getting current date and time
  let nextDay = new Date(); // Getting the date and time 24 hours later
  nextDay.setHours(now.getHours() + 24);

  // Filtering the data
  let hourlyData = weatherData.timelines.hourly.filter((item) => {
    let itemDate = new Date(item.time); // Parsing item's time
    return itemDate >= now && itemDate <= nextDay; // Checking if item's time is between now and the next 24 hours
  });

  // Find the index of the current hour
  const currentIndex = hourlyData.findIndex((item) => {
    let itemDate = new Date(item.time);
    return itemDate >= now;
  });

  // Get previous, current, and next hour data
  const previousHour = hourlyData[currentIndex - 1];
  const currentHour = hourlyData[currentIndex];
  const nextHour = hourlyData[currentIndex + 1];

  // Create a ref to the current hour div
  const currentHourRef = useRef();

  // Scroll to the current hour div when the component mounts
  useEffect(() => {
    currentHourRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="HourWeatherCard">
      {previousHour && <HourData data={previousHour} />}
      {currentHour && <HourData data={currentHour} ref={currentHourRef} />}
      {nextHour && <HourData data={nextHour} />}
    </div>
  );
}

// HourData is a new component for rendering each hour's data
const HourData = React.forwardRef(({ data }, ref) => {
  let compassDirection = ""; //creating a block scope variable
  // Main Program
  function compassDirectionConversion(data) {
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
    let windDirection = data.values.windDirection;
    compassDirection = sector[Math.round(windDirection / 22.5)]; // Rounds the wind direction out into 17 sectors. Sectors 0 and 16 are both N.
    return compassDirection;
  }

  return (
    <div ref={ref}>
      <h3>Time: {data.time}</h3>
      <h3>Temp: {data.values.temperature}</h3>
      <h3>Humidity: {data.values.humidity}</h3>
      <h3>Rain: {data.values.precipitationProbability}</h3>
      <h3>Wind Speed: {data.values.windSpeed}</h3>
      <h3>Wind Gust: {data.values.windGust}</h3>
      <h3>Wind Direction: {data.values.windDirection}</h3>
      <h3>Wind Compass: {compassDirectionConversion(data)}</h3>
    </div>
  );
});

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
