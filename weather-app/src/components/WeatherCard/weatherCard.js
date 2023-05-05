import Button from '../Button/Button'

// need to pass JSON weather data as a prop
function Card (JSONDATA as a prop) { 

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
            <Button props?/>
        </div>
    )
}

export default Card