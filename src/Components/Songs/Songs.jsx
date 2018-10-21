import React, { Component } from 'react';
import Song from '../Song/Song';
import axios from 'axios';

class Songs extends Component {
  state = {
    songs: []
  };
  componentDidMount() {
    axios.get('http://localhost:3000/songs').then(res => {
      this.setState({ songs: res.data });
    });
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        {this.state.songs.length ? (
          this.state.songs.map(song => <Song key={song.id} song={song} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default Songs;
