import React from 'react'
import './weatherCard.css'

// need to pass JSON weather data as a prop
function WeatherCard ({weatherData, dayIndex}) { 

    const maxTemp = weatherData.timelines.daily[dayIndex].values.temperatureMax
    const minTemp = weatherData.timelines.daily[dayIndex].values.temperatureMin
    
    // const weatherCodeMax = weatherData.timelines.daily[dayIndex].values.weatherCodeMax
    // const weatherCodeMin = weatherData.timelines.daily[dayIndex].values.weatherCodeMin
    
    const dateString = weatherData.timelines.daily[dayIndex].time;
    const dateObj = new Date(dateString);
    const plainDate = dateObj.toLocaleDateString(undefined, {weekday: 'long'});
    const today = new Date().toLocaleDateString(undefined, {weekday: 'long'});

     // Get the name of the day using the toLocaleDateString method
     // let day = date.toLocaleDateString("default", { weekday: "long" });

    return (
        <div className="weatherCard">

            {/* <p>Enter a City, ZIP or Postcode: <input type="text" id="cityInput"/></p>
            <button onclick="getWeather()">Get Weather</button> */}
            <p className="dayHeading">{plainDate === today ? "Today" : plainDate}</p>
            <p>Max: {maxTemp}&deg;C</p>
            <p>Min: {minTemp}&deg;C</p>
            
            {/* not sure the button should be here or if it needs any props*/}
            
        </div>
    )
}

export default WeatherCard

    // <p>Today's weather codeMax: {weatherCodeMax}</p>
    // <p>Today's weather codeMin: {weatherCodeMin}</p>



