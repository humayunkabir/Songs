import React, { Component } from 'react';
import './App.css';
import Songs from './Components/Songs/Songs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Songs />
        </header>
      </div>
    );
  }
}

export default App;
