import React from "react";
function SearchBar({ query, setQuery }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <header>JobChaserz</header>
      <input
        className="search-box"
        type="text"
        placeholder="Search for jobs"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
