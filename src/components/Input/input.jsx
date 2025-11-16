import React, { useState } from "react";
import "./input.css";

export default function SearchBar({ onSearch, defaultValue = "" }) {
  const [term, setTerm] = useState(defaultValue);

  const submit = (e) => {
    e?.preventDefault?.();
    if (onSearch && term.trim()) onSearch(term.trim());
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") submit(e);
  };

  return (
    <form className="searchBar" onSubmit={submit}>
      <input
        className="searchInput"
        type="text"
        placeholder="London,UK"
        value={term}
        onFocus={() => {
          if (term === defaultValue) setTerm("");
        }}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  );
}
