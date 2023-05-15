import React from 'react';
import './MoviePage.css';

const MoviePage = ({ props, clearState }) => {
  return (
    <div>
      <div className="top">
        <img className="back-img" src={props.backdrop_path}/>
        <h2 className="movie-tag">{props.tagline}</h2>
        <button className="home-btn" onClick={() => clearState()}>HOME</button>
      </div>
      <div className="movie-container">
        <div className="left-side">
          <h2 className="movie-title">{props.title}</h2>
          <p className="overview">{props.overview}</p>
        </div>
        <div className="right-side">
          <img className="post-img" src={props.poster_path}/>
        </div>
      </div>
    </div>
  )
}

export default MoviePage;