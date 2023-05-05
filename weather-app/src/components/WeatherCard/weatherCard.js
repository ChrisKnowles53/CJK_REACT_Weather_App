import React from 'react'
import './weatherCard.css'

// need to pass JSON weather data as a prop
function weatherCard ({weatherData, dayIndex}) { 

    const maxTemp = weatherData.timelines.daily[dayIndex].values.temperatureMax
    const minTemp = weatherData.timelines.daily[dayIndex].values.temperatureMin
    const avgTemp = weatherData.timelines.daily[dayIndex].values.temperatureAvg
    const weatherCodeMax = weatherData.timelines.daily[dayIndex].values.weatherCodeMax
    const weatherCodeMin = weatherData.timelines.daily[dayIndex].values.weatherCodeMin
        

    return (
        <div className="card">

            {/* <p>Enter a City, ZIP or Postcode: <input type="text" id="cityInput"/></p>
            <button onclick="getWeather()">Get Weather</button> */}

            <p>Today's max temperature: {maxTemp}</p>
            <p>Today's min temperature: {minTemp}</p>
            <p>Today's average temperature: {avgTemp}</p>
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