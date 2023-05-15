import React from 'react';
import './MoviePage.css';

const MoviePage = ({ props, clearState }) => {
  console.log('tagline', clearState)
  return (
      <main style={{backgroundImage: `url(${props.backdrop_path})`}}>
        <div className="container">
          <div className="top">
            {/* <img className="back-img" src={props.backdrop_path}/> */}
            <button className="home-btn" onClick={() => clearState()}><i className="arrow left"></i></button>
            <h2 className="movie-tag">{props.tagline}</h2>
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
      </main>
    
  )
}

export default MoviePage;