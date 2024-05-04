import React from "react";

export default function SortSelect({ onChange, name, value }) {
  return (
    <div className="select-container">
      <label>Sort by:</label>
      <select
        className="select-dropdown"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="0">None</option>
        <option value="1">Alphabetical</option>
      </select>
    </div>
  );
}
