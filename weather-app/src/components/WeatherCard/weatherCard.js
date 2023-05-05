import React from 'react'
import './weatherCard.css'

// need to pass JSON weather data as a prop
function weatherCard ({weatherData, dayIndex}) { 

    const maxTemp = weatherData.timelines.daily[dayIndex].values.temperatureMax
    const minTemp = weatherData.timelines.daily[dayIndex].values.temperatureMin
    
    const weatherCodeMax = weatherData.timelines.daily[dayIndex].values.weatherCodeMax
    const weatherCodeMin = weatherData.timelines.daily[dayIndex].values.weatherCodeMin
    
    const dateString = weatherData.timelines.daily[dayIndex].time
    // const dateString = "2023-05-05T00:00:00Z";
    const dateObj = new Date(dateString);
    const plainDate = dateObj.toISOString().slice(0, 10);
    const today = new Date().toISOString().slice(0, 10);

    return (
        <div className="card">

            {/* <p>Enter a City, ZIP or Postcode: <input type="text" id="cityInput"/></p>
            <button onclick="getWeather()">Get Weather</button> */}
            <p>{plainDate === today ? "Today" : plainDate}</p>
            <p>Max: {maxTemp}&deg;</p>
            <p>Min: {minTemp}&deg;</p>
            
            <p>Today's weather codeMax: {weatherCodeMax}</p>
            <p>Today's weather codeMin: {weatherCodeMin}</p>
            
            {/* not sure the button should be here or if it needs any props*/}
            
        </div>
    )
}

export default weatherCard

// this is the deconstruted data from vanilla js file


// const maxTempElement = document.getElementById("maxTemp");
// maxTempElement.textContent = maxTemp;

// const minTempElement = document.getElementById("minTemp");
// minTempElement.textContent = minTemp;

// const avgTempElement = document.getElementById("avgTemp");
// avgTempElement.textContent = avgTemp;

// const weatherCodeMaxElement = document.getElementById("weatherCodeMax");
// weatherCodeMaxElement.textContent = weatherCodeMax;

// const weatherCodeMinElement = document.getElementById("weatherCodeMin");
// weatherCodeMinElement.textContent = weatherCodeMin;