import React, { useState } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';

const Search = () => {

  const [query, setQuery] = useState( "" );
  const [pics, setPics] = useState( [] );

  const client_id = "tKjnMNUEn8rAuPmh5Zujwc26m6QVWXhsY0VaLV4HZ44";
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${ client_id }&query=${ query }`;

  // changes made while typing
  const handleChange = e => {
    setQuery( e.target.value );
  }

  // GET data from API
  const handleInput = ( e ) => {
    if ( query.trim() === '' ) return;
    e.preventDefault( e );
    axios
      .get( fetchUrl, {
        headers: {}
      } )
      .then( response => {
        console.log( response );
        setPics( response.data.results );
      } )
  }

  return (
    <div className="container">
      <form
        className="search-bar"
        onSubmit={handleInput}
      >
        <input
          type="text"
          placeholder="Search for pictures..."
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {pics.length > 0 &&
        <SearchResults
          pics={pics}
        />}
    </div>
  );
}

export default Search;