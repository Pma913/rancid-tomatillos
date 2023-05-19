import React from 'react';
import HomePage from '../HomePage/HomePage';
import MoviePage from '../MoviePage/MoviePage';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/movie/:id" render={({match}) => {
            return <MoviePage props={match.params.id} />
        }
      } />
    </main>
  )
}

export default App;
