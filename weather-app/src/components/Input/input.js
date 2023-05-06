
import React from "react";
import { useState } from "react";
import "./input.css";

function SearchBar( {handleSearchClick}) {
  const [city, setCity] = useState("");

  return (
    <div className = "search" >
      <input
        placeholder="Enter City"
        onChange={(event) => setCity(event.target.value)}
      />
      <button
        onClick={() => { handleSearchClick(city) }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
