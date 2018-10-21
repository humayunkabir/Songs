import React, { Component } from 'react';
import Song from '../Song/Song';
import axios from 'axios';

class Songs extends Component {
  state = {
    songs: []
  };
  componentDidMount() {
    axios.get('http://localhost:3000/songs').then(res => {
      this.setState({ songs: res.data.slice(0, 12) });
    });
  }
  render() {
    return (
      <div className="container-fluid py-5">
        <div
          className="row align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}
        >
          {this.state.songs.length ? (
            this.state.songs.map(song => <Song key={song.id} song={song} />)
          ) : (
            <div className="col-auto">
              <h2>Loading...</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Songs;
