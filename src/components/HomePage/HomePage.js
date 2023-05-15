import React, { Component } from 'react';
import Header from '../Header/Header';
import CardDisplay from '../CardDisplay/CardDisplay';
import { getMovies } from '../../utilities/api-calls';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    getMovies("https://rancid-tomatillos.herokuap.com/api/v2/movies")
    .then(data => this.setState({ movies: data.movies }))
    .catch(err => {
      this.setState({ movies: [], error: err.message })
    });
  }

  render() {
    return (
      <main>
        <div>
          <Header />
          {this.state.error && <h2>Ooooops! Looks like something went wrong, keep calm and try again 😩</h2>}
          <CardDisplay movies={this.state.movies} setMovie={this.props.setMovie}/>
        </div>
      </main>
    )
  }
}



export default HomePage;
