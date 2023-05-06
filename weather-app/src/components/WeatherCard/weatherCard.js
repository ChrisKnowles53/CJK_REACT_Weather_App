import React from 'react'
import './weatherCard.css'

// need to pass JSON weather data as a prop
function WeatherCard ({weatherData, dayIndex}) { 

    const maxTemp = weatherData.timelines.daily[dayIndex].values.temperatureMax
    const minTemp = weatherData.timelines.daily[dayIndex].values.temperatureMin
    
    // const weatherCodeMin = weatherData.timelines.daily[dayIndex].values.weatherCodeMin
    
    const dateString = weatherData.timelines.daily[dayIndex].time;
    const dateObj = new Date(dateString);
    const plainDate = dateObj.toLocaleDateString(undefined, {weekday: 'long'});
    const today = new Date().toLocaleDateString(undefined, {weekday: 'long'});
    
    // const weatherCodeMax = weatherData.timelines.daily[dayIndex].values.weatherCodeMax;
    // const icon = `/v2_icons/small/png/${weatherCodeMax}.png`;

    return (
        <div className="weatherCard">
            {/* <img src={icon} alt="weather icon" /> */}
            <p className="dayHeading">{plainDate === today ? "Today" : plainDate}</p>
            <p>Max: {maxTemp}&deg;C</p>
            <p>Min: {minTemp}&deg;C</p>
                          
        </div>
    )
}

export default WeatherCard

    // <p>Today's weather codeMax: {weatherCodeMax}</p>
    // <p>Today's weather codeMin: {weatherCodeMin}</p>



