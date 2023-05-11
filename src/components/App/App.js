import React, { Component } from 'react';
import Header from '../Header/Header';
import CardDisplay from '../CardDisplay/CardDisplay';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <div>
          <Header />
          <CardDisplay />
        </div>
      </main>
    )
  }
}



export default App;
