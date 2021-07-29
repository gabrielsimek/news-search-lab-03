import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ onChange, page }) => {
  return <>
    <button 
      onClick={() => onChange(-1) }
      disabled={page === 1}
    >Prev Page
    </button>
    <span>Page {page}</span>
    <button onClick={() => onChange(1)}
    >
    Next Page
    </button>
  </>;
};

export default Paging;

Paging.propTypes = {
  onChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};
