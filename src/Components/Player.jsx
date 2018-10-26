import React, { Component } from 'react';
import axios from 'axios';
import Song from './Song/Song';
import NotFound404 from './NotFound404';

class Player extends Component {
  state = { song: null, error: null }
  componentDidMount(){
    axios.get(`http://localhost:3000/api/songs/${this.props.match.params.id}`)
    .then(res => this.setState({ song: res.data }))
    .catch(error => this.setState({ error: error.response.data }));
  }
  render() { 
    const { song, error } = this.state;
    return (song ? (
      <Song song={ song } />
    ) : (
      <NotFound404 message={error}/>
    ));
  }
}
 
export default Player;