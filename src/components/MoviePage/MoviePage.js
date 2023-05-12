import React from 'react';

const MoviePage = ({ props }) => {
  console.log('tagline', props)
  return (
    <div>
      <div className="top">
        <img className="back-img" src={props.backdrop_path}/>
        <h2 className="movie-tag">{props.tagline}</h2>
        <button className="home-btn">HOME</button>
      </div>
      <div className="left-side">
        <h2 className="movie-title">{props.title}</h2>
        <p className="overview">{props.overview}</p>
      </div>
      <div className="righ-side">
        <img className="back-img" src={props.poster_path}/>
      </div>
    </div>
  )
}

export default MoviePage;