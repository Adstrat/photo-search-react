


const InitialView = ( { initialPics } ) => {


  return (
    <div>
      <div className="black-background container">
        <h1 className="header">
          <span className="explore">Explore .. </span>
          <span className="discover">Discover .. </span>
          <span className="inspire">Inspire</span>
        </h1>
        <div className="unsplash-pictures">
          {initialPics.map( ( initialPic ) => (
            <div
              className="image"
              key={initialPic.id}>
              <img
                className="card-image"
                alt={initialPic.alt_description}
                src={initialPic.urls.regular}
                height="300px">
              </img>
              <h4 className="card-text">{initialPic.user.name}</h4>
            </div>
          ) )}
        </div>
      </div>
    </div >
  );
}

export default InitialView;