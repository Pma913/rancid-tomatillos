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
      .catch(err => {
        this.setState({ movie: {}, error: err.message })
        console.log(err)
      });
  }

  render() {
    const movie = this.state.movie;
    if (this.state.error) {
      return <h2 className="error-message">😩 {this.state.error} 😩</h2>
    } else {
      return (
        <main style={{backgroundImage: `url(${movie.backdrop_path})`}}>
          <div className="container">
            <div className="top">
              <Link to="/" className="home-btn"><i className="arrow left"></i></Link>
              <h2 className="movie-tag">{movie.tagline}</h2>
              <div className="movie-player">

                {this.state.video ? <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${this.state.video}`} /> :
                  <div>
                    <h2>Sorry, there currently is no video available for this movie</h2>
                    <p>Try searching <a href="https://www.youtube.com/">YouTube</a> for what you are looking for</p>
                  </div>}

              </div>
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
} 

export default MoviePage;