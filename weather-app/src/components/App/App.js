import "./App.css";
import React, { useState, useEffect } from "react";
import WeatherCard from "../WeatherCard/weatherCard";
import SearchBar from "../Input/input";
import poweredBy from "../../Images/powered-by-tomorrow/Powered_by_Tomorrow-White.png";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
// require('dotenv').config();

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");

  useEffect(() => {
    async function getWeather() {
      // if (!weatherData) { // this and the useEffect dependency stop me from hitting the API too many times whilst I develop the app.
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${REACT_APP_API_KEY}`
      );
      const weatherData = await response.json();
      console.log(weatherData);
      setWeatherData(weatherData);
      //}
    }

    getWeather();
  }, [city]);

  function capitalizeInput(input) {
    // see bottom of code for detailed explanation of this
    if (/^[a-zA-Z\s]+$/.test(input)) {
      // If input contains only characters, capitalize first letter of each word
      return input
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
    } else {
      // Otherwise, convert any sequence of characters that contains only letters and digits to uppercase
      const capitalizedWords = input.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });

      const result = capitalizedWords
        .join(" ")
        .replace(/\b[a-zA-Z0-9]+\b/g, (match) => {
          return match.toUpperCase();
        });

      return result;
    }
  }

  function handleSearchClick(city, setInputValue) {
    setCity(city);
    setInputValue("");
  }

  return (
    <div>
      <div className="mainContainer">
        <div className="mainDisplay">
          <div className="searchBar">
            <SearchBar handleSearchClick={handleSearchClick} />
          </div>
          <p className="city">{capitalizeInput(city)}</p>
          <div className="today">
            {weatherData && (
              <WeatherCard weatherData={weatherData} dayIndex={0} />
            )}
          </div>
          <div className="forecast">
            {weatherData &&
              weatherData.timelines.daily
                .slice(1, 5)
                .map((day, index) => (
                  <WeatherCard
                    key={index}
                    weatherData={weatherData}
                    dayIndex={index + 1}
                  />
                ))}
          </div>
        </div>
        <a
          href="https://www.tomorrow.io/weather-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={poweredBy} alt="poweredBy" className="poweredBy"></img>
        </a>
      </div>
    </div>
  );
}

export default App;

// 👀Explanation of the regex used in the capitalizeInput function:

// The function capitalizeInput takes a string input as its argument and returns a capitalized version of the input string. The behavior of the function depends on the contents of the input string.

// If the input string contains only alphabetical characters (i.e., A-Z or a-z) or spaces, the function capitalizes the first letter of each word in the input string and returns the resulting string. To do this, the function first checks if the input string matches the regular expression /^[a-zA-Z\s]+$/ using the test method. If the input string matches this regular expression, the function splits the input string into an array of words using the split method and the space character as the separator. Then, the function uses the map method to iterate over each word in the array, capitalizing the first letter of each word using the toUpperCase and slice methods, and converting the rest of the word to lowercase using the toLowerCase method. Finally, the function joins the capitalized words back together into a single string using the join method and returns the resulting string.

// If the input string contains any non-alphabetical characters (e.g., digits or special characters), the function capitalizes any sequence of characters in the input string that contains only letters or digits. To do this, the function first splits the input string into an array of words using the split method and the space character as the separator. Then, the function uses the map method to iterate over each word in the array, capitalizing the first letter of each word using the toUpperCase and slice methods. Finally, the function joins the capitalized words back together into a single string using the join method, and uses the replace method with the regular expression \b[a-zA-Z0-9]+\b/g to match any sequence of characters in the string that contains only letters or digits, and replaces them with an uppercase version of the same sequence using the toUpperCase method. The resulting string is then returned.

//Detailed explanation of the regular expression /^[a-zA-Z\s]+$/:

// ^ - This symbol matches the beginning of a string.
// [a-zA-Z\s]+ - This is the actual pattern that we're looking for:
// [a-zA-Z] - This is a character set that matches any uppercase or lowercase letter.
// \s - This matches any whitespace character, such as spaces or tabs.
// + - This indicates that we want to match one or more occurrences of the previous pattern, which in this case is any letter or whitespace character.
// $ - This symbol matches the end of a string.

// The regular expression /^[a-zA-Z\s]+$/ is looking for a string that starts with one or more letters or whitespace characters, and ends with one or more letters or whitespace characters. This pattern will match any string that consists only of letters and whitespace characters.

// Detailed explanation of the regular expression /\b[a-zA-Z0-9]+\b/g:

// \b - This matches a word boundary, which is the position between a word character (as defined by \w) and a non-word character (as defined by \W).
// [a-zA-Z0-9]+ - This is a character set that matches any uppercase or lowercase letter or any digit. The + symbol after the character set means that we want to match one or more occurrences of this pattern.
// \b - This matches another word boundary, so that we only match whole words.
// /g - This indicates that we want to perform a global search for all matches in the input string.

//The regular expression /\b[a-zA-Z0-9]+\b/g is looking for any sequence of characters that contains only letters and digits, and that is surrounded by word boundaries. This pattern will match any word consisting only of letters and digits, and will match all occurrences of such words in the input string
