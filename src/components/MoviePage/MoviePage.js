import React from 'react';

const MoviePage = () => {
  return (
    <div>
      <div className="top">
        <img className="back-img" src={back-img}/>
        <h2 className="movie-tag">{tagline}</h2>
        <button className="home-btn">HOME</button>
      </div>
      <div className="left-side">
        <h2 className="movie-title">{title}</h2>
        <p className="overview">{overview}</p>
      </div>
      <div className="righ-side">
        <img className="back-img" src={post-img}/>
      </div>
    </div>
  )
}

export default MoviePage;