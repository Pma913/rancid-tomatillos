import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import MoviePage from '../MoviePage/MoviePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: null
    }
  }

  render() {
    if(this.state.movie) {
      return (
        <MoviePage props={this.state.movie} />
      )
    }
    else {
      return (
        <HomePage setMovie={(movie) => {
          this.setState({movie: movie})
        }} />
      )
    }
  }
}



export default App;
