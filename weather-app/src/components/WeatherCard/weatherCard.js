import React from 'react'
import './weatherCard.css'
// import icon from '../../V2_icons/small/png/1001.png'

import ImportAll from '../Icons/icons'
const images = ImportAll(require.context('../../V2_icons/small/png', true, /\.png$/));
// let icon = 1001

function WeatherCard ({weatherData, dayIndex}) { 

    const maxTemp = Math.round(weatherData.timelines.daily[dayIndex].values.temperatureMax)
    const minTemp = Math.round(weatherData.timelines.daily[dayIndex].values.temperatureMin)
    
    // const weatherCodeMin = weatherData.timelines.daily[dayIndex].values.weatherCodeMin
    
    const dateString = weatherData.timelines.daily[dayIndex].time;
    const dateObj = new Date(dateString);
    const plainDate = dateObj.toLocaleDateString(undefined, {weekday: 'long'});
    const today = new Date().toLocaleDateString(undefined, {weekday: 'long'});
    
    const weatherCodeMax = weatherData.timelines.daily[dayIndex].values.weatherCodeMax;
   // console.log(weatherCodeMax)
    const icon = images[`./${weatherCodeMax}.png`];

    return (
        <div className="weatherCard">
            <p className="dayHeading">{plainDate === today ? "Today" : plainDate}</p>
            <div className="iconAndTemp">
                <img src={icon} alt="weather icon" className="iconImage" />
                <div className="tempContainer">
                    <p className="temp">{maxTemp}&deg;C</p>
                    <p className="temp">{minTemp}&deg;C</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard

// In this example, we import the importAll function from ./icons and use it to import all the images in the ../../V2_icons/small/png folder. We store the imported images in an images object, which we then use to dynamically select the image we need in our component.



