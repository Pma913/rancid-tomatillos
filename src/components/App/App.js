import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';

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
        <div>{this.state.movie.title}</div>
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
