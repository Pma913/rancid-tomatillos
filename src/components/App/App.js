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

  clearState = () => {
    this.setState({movie: null})
  }

  render() {
    if(this.state.movie) {
        {if (this.state.error) {
          return (
            <div>
              <h2>Ooooops! Looks like something went wrong, keep calm and try again 😩</h2>
              <button onClick={() => this.setState({ movie: null })}>TAKE ME BACK</button>
            </div>
          )
        } else {
          return (
            <MoviePage clearState={this.clearState} props={this.state.movie} />
          )
        } 
        }
    }
    else {
      return (
        <HomePage setMovie={(movie, err) => {
          this.setState({movie: movie, error: err})
        }} />
      )
    }
  }
}



export default App;
