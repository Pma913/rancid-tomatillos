import React, { Component } from 'react';
import './MoviePage.css';
import { getMovies } from '../../utilities/api-calls.js';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    Promise.all([
      getMovies(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.props}`),
      getMovies(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.props}/videos`),
    ])
      .then(data => {
        if (data[1].videos[1]) {
          this.setState({movie: data[0].movie, video: data[1].videos[1].key})
        } else {
          this.setState({movie: data[0].movie})
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const movie = this.state.movie;
    return (
      <main style={{backgroundImage: `url(${movie.backdrop_path})`}}>
        <div className="container">
          <div className="top">
            <Link to="/" className="home-btn"><i className="arrow left"></i></Link>
            <h2 className="movie-tag">{movie.tagline}</h2>
          </div>
          <div className="movie-container">
            <div className="left-side">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="overview">{movie.overview}</p>
              <div className="movie-player">
                {this.state.video ? <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${this.state.video}`} /> :
                  <div className="no-movies-wrapper">
                    <h2 className="no-video">Sorry, there currently are no videos available for this movie</h2>
                    <p className="no-video2">Try searching <a href="https://www.youtube.com/">YouTube</a> for what you are looking for</p>
                  </div>
                }
            </div>
            </div>
            <div className="right-side">
              <img className="post-img" src={movie.poster_path}/>
              <p className="extra-details">Movie Runtime: {movie.runtime} minutes</p>
              {movie.genres && <p className="extra-details"> Genre: {movie.genres.join(", ")}</p>}
              <p className="extra-details">Average Rating: {movie.average_rating}</p>
            </div>
          </div>
        </div>
      </main>
  )
  }
} 

export default MoviePage;