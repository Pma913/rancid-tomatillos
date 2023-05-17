import React, { Component } from 'react';
import './MoviePage.css';
import { getMovies } from '../../utilities/api-calls.js';
import { Link } from "react-router-dom";

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    getMovies(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.props}`)
    .then(data => {
      this.setState({movie: data.movie})
    })
    .catch(err => console.log(err));
  }

  render() {
    const movie = this.state.movie;
    console.log(movie, 'movie page state')
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
            </div>
            <div className="right-side">
              <img className="post-img" src={movie.poster_path}/>
            </div>
          </div>
        </div>
      </main>
  )
  }
} 

export default MoviePage;