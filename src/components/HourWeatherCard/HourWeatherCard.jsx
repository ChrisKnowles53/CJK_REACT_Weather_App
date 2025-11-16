import React, { useRef, useEffect } from "react";
import "./HourWeatherCard.css";
import ImportAll from "../Icons/icons";
import "./HourWeatherCard.css";

const images = ImportAll(
  require.context("../../V2_icons/small/png", true, /\.png$/)
);

export default function Next24Hours({ weatherData }) {
  let now = new Date();
  let nextDay = new Date();
  nextDay.setHours(now.getHours() + 24);

  let hourlyData = weatherData.timelines.hourly.filter((item) => {
    let itemDate = new Date(item.time);
    return itemDate >= now && itemDate <= nextDay;
  });

  const currentIndex = hourlyData.findIndex((item) => {
    let itemDate = new Date(item.time);
    return itemDate >= now;
  });

  const currentHour = hourlyData[currentIndex];
  const nextHour = hourlyData[currentIndex + 1];
  const nextHour2 = hourlyData[currentIndex + 2];

  const currentHourRef = useRef();

  useEffect(() => {
    currentHourRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="HourWeatherCard">
      {currentHour && <HourData data={currentHour} ref={currentHourRef} />}
      {nextHour && <HourData data={nextHour} />}
      {nextHour2 && <HourData data={nextHour2} />}
    </div>
  );
}

const HourData = React.forwardRef(({ data }, ref) => {
  let compassDirection = "";
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
    ];
    let windDirection = data.values.windDirection;
    compassDirection = sector[Math.round(windDirection / 22.5)];
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
