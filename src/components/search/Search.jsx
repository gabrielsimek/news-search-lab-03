import React from 'react';
import PropTypes from 'prop-types';


const Search = ({ search, onSearchChange }) => {
  return (
    <form>
      <label htmlFor="articleSearch">
        <input
          id="articleSearch"
          type="text"
          name="articleSearch"
          onChange={onSearchChange}
          value={search}
        >

        </input>
      </label>
      <button >Search!</button>
    </form>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
}; 

export default Search;
