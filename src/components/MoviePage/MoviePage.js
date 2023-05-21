import React, { Component } from 'react';
import './MoviePage.css';
import { getMovies } from '../../utilities/api-calls.js';
import { Link } from 'react-router-dom';
import Video from '../Video/Video';
import { cleanMovie, cleanVideos } from '../../utilities/apiCleaners';


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
          this.setState({movie: cleanMovie(data[0]), videos: cleanVideos(data[1])})
        } else {
          this.setState({movie: cleanMovie(data[0])})
        }
      })
      .catch(err => {
        this.setState({ movie: {}, error: err.message })
        console.log(err)
      });
  }

  render() {
    const movie = this.state.movie;
    if(movie.title) {
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
                  <Video allMovies={this.state.videos} />
                </div>
              </div>
              <div className="right-side">
                <img className="post-img" src={movie.poster_path} alt={movie.title}/>
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
} 

export default MoviePage;