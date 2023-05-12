import React, { Component } from 'react';
import Header from '../Header/Header';
import CardDisplay from '../CardDisplay/CardDisplay';
import { getMovies } from '../../utilities/api-calls'

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    getMovies("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(data => this.setState({ movies: data.movies }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <main>
        <div>
          <Header />
          <CardDisplay movies={this.state.movies}/>
        </div>
      </main>
    )
  }
}



export default HomePage;
