import React, { Component } from 'react';
import Bio from './Bio';
import Portfolio from './Portfolio';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Bio />
        <Portfolio />
      </div>
    );
  }
}

export default App;