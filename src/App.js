import React, { Component } from 'react';
import logo from './Images/logo.png';
import Songs from './Components/Songs/Songs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Songs />
        </header>
      </div>
    );
  }
}

export default App;
