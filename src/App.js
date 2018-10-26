import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Songs from './Components/Songs/Songs';
import Player from './Components/Player';
import NotFound404 from './Components/NotFound404';

class App extends Component {
  render() {
    return (
      <div className="app">
        <main>
          <Switch>
            <Route exact path='/' component={NotFound404} />
            <Route path='/songs/:id' component={Player} />
            <Route path='/songs' component={Songs} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
