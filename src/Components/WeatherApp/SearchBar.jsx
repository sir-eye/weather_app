import React from 'react';
import search from './Assets/search.png';

const SearchBar = ({ city, setCity, handleSearch }) => {
  return (
    <div className="search-bar">
      <img src={search} alt="search icon" />
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
