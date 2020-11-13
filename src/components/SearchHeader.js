import React from 'react';

function SearchHeader({searchTerm, onSearchTermChange, onSearchSubmit}) {
  return (
    <div className="search">
      <span>Hacker News</span>
      <form onSubmit={onSearchSubmit}> <input type="text" value={searchTerm} 
      onChange={onSearchTermChange} placeholder="search"/></form>
     
    </div>
  );
}

export default SearchHeader;
