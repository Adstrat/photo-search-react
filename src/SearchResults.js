


const SearchResults = ( { pics } ) => {

  return (
    <div>
      <h1>Search Results:</h1>
      <div className="unsplash-pictures">
        {pics.map( ( pic ) => (
          <div
            className="image"
            key={pic.id}>
            <img
              className="card-image"
              alt={pic.alt_description}
              src={pic.urls.regular}
              height="200px">
            </img>
          </div>
        ) )}
      </div>
    </div>


  );
}

export default SearchResults;