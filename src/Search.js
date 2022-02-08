import React, { useEffect, useState } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';
import InitialView from './InitialView';

const Search = () => {

  const [query, setQuery] = useState( "" );
  const [pics, setPics] = useState( [] );
  const [initialPics, setInitialPics] = useState( [] );

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

  // initial photo selection 
  useEffect( () => {
    if ( pics.length < 1 ) {
      axios
        .get( `https://api.unsplash.com/photos?client_id=${ client_id }` )
        .then( response => {
          // this.setState({ imgs: data.data });
          console.log( response );
          setInitialPics( response.data );
        } )
        .catch( err => {
          console.log( 'Error happened during fetching!', err );
        } );
    }
  }, [] );

  return (
    <div>
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
      </div>
      {pics.length < 1 &&
        <InitialView
          initialPics={initialPics}
        />
      }
      {pics.length > 0 &&
        <SearchResults
          pics={pics}
        />}
    </div>
  );
}

export default Search;