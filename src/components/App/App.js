import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import { getMovies } from '../../utilities/api-calls'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <HomePage />
    )
  }
}



export default App;
