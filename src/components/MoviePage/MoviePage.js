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
    // getMovies(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.props}`)
    // .then(data => {
    //   this.setState({movie: data.movie})
    // })
    // .catch(err => console.log(err));
    
    
    Promise.all([
      getMovies(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.props}`),
      getMovies(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.props}/videos`),
    ])
      .then(data => {
        if (data[1].videos[1]) {
        console.log('there is a video')
        console.log('video here', data[1].videos[1])
          this.setState({movie: data[0].movie, video: data[1].videos[1].key})
        } else {
          console.log('there is no video')
          this.setState({movie: data[0].movie})
        }
      })
      

  }

  render() {
    const movie = this.state.movie;
    return (
      <main style={{backgroundImage: `url(${movie.backdrop_path})`}}>
        <div className="container">
          <div className="top">
            <Link to="/" className="home-btn"><i className="arrow left"></i></Link>
            <h2 className="movie-tag">{movie.tagline}</h2>
            <div className="movie-player">
              {this.state.video ? <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${this.state.video}`} /> :
                <h2>Sorry, there currently is no video available for this movie</h2>}
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

export default MoviePage;