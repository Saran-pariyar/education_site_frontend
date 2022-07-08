import React from "react";
import "./search.css";

const Search = () => {
  return (
    <section className="search-section">
      <div className="search-container">
        <h1>Search Your Courses here:</h1>
        <div className="search-bar">
          <input type="text" className="search-input" />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Search;
