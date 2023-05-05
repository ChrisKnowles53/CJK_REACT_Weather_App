
// need to pass JSON weather data as a prop
function weatherCard (JSONDATA as a prop) { 

// deconstruct JSONDATA prop into variables i want to use
    const {title, text, img} = appProps

    return (
        <div className="card">

            {/* <p>Enter a City, ZIP or Postcode: <input type="text" id="cityInput"/></p>
            <button onclick="getWeather()">Get Weather</button> */}

            <p>Today's max temperature: <span id="maxTemp"></span></p>
            <p>Today's min temperature: <span id="minTemp"></span></p>
            <p>Today's average temperature: <span id="avgTemp"></span></p>
            <p>Today's weather codeMax: <span id ="weatherCodeMax"></span></p>
            <p>Today's weather codeMin: <span id ="weatherCodeMin"></span></p>
            
            {/* not sure the button should be here or if it needs any props*/}
            
        </div>
    )
}

export default Card

// this is the deconstruted data from vanilla js file
// const maxTemp = weatherData.timelines.daily[0].values.temperatureMax
// const minTemp = weatherData.timelines.daily[0].values.temperatureMin
// const avgTemp = weatherData.timelines.daily[0].values.temperatureAvg
// const weatherCodeMax = weatherData.timelines.daily[0].values.weatherCodeMax
// const weatherCodeMin = weatherData.timelines.daily[0].values.weatherCodeMin

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