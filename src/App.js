import React, { Component } from 'react';
import destinations from './data/destinations'
import Destination from './components/destination'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h2>Destinations I'd like to visit</h2>

        <ul className="destinations">
        {destinations.map(item => {
          return <Destination key={item.id} destination={item} />
        })}
        </ul>

      </div>
    );
  }
}

export default App;
