import React from 'react';

const Search = ({search, onSearch}) => {
  return (
    <section>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </section>
  );
}

export default Search;