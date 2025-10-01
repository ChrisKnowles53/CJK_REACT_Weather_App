import React from "react";
import { useState } from "react";
import "./input.css";

function SearchBar( {handleSearchClick}) {
  const [inputValue, setInputValue] = useState("");

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearchClick(inputValue, setInputValue);
    }
  }

  return (
    <div className = "search" >
      <input
        placeholder="City, Zip, Postcode"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={() => { handleSearchClick(inputValue, setInputValue) }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
