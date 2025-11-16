import React, { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') return;
    onSearch(query); // Call parent callback with the search query
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="search-bar my-8 text-center px-2 xs:mb-10 md:mb-16"
    >
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-box md:w-2/4 sm:p-4 xs:px-2"
        placeholder="Search News"
      />
      <button type="submit" className="btn ml-2">
        Search
      </button>
    </form>
  );
}

export default Search;
