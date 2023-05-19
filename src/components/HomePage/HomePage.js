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
    getMovies("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(data => this.setState({ movies: data.movies }))
    .catch(err => {
      this.setState({ movies: [], error: err.message })
      console.log(err)
    });
  }

  render() {
    return (
      <main>
        <div>
          <Header />
        
          {this.state.error ? <h2 className="error-message">😩 {this.state.error} 😩</h2> :
          <CardDisplay movies={this.state.movies} setMovie={this.props.setMovie}/>
          } 
        </div>
      </main>
    )
  }
}



export default HomePage;
