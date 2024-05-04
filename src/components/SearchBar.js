import React from "react";
import "../styles/Components.css";

export default function SearchBar({ onChange, name, value }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search universities..."
        className="search-bar-input"
        onChange={onChange}
        name={name}
        value={value}
      />
      <div className="search-icon"></div>
    </div>
  );
}
