import React from 'react';
import PropTypes from 'prop-types';


const Search = ({ search, onSearchChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="articleSearch">
        <input
          placeholder="search"
          data-testid="search-input"
          id="articleSearch"
          type="text"
          name="articleSearch"
          onChange={onSearchChange}
          value={search}
        >
        </input>
      </label>
      <button data-testid="search-button">Search!</button>
    </form>
  );
};

Search.propTypes = {
  search: PropTypes.string,
  onSearchChange: PropTypes.func,
  onSubmit: PropTypes.func
}; 

export default Search;
