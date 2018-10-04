import React from 'react';
import './Song.css';

const Song = props => {
  const { song_name, song_link, album_name } = props.song;
  return (
    <a
      className="song-card"
      href={`https://www.youtube.com/watch?v=${song_link}`}
      target="_blank"
    >
      <img
        className="song-thumb"
        src={`https://img.youtube.com/vi/${song_link}/mqdefault.jpg`}
        alt={song_name}
      />
      <h2 className="song-title">{song_name}</h2>
      <p className="album-title">{album_name}</p>
      {/* <img src={`https://img.youtube.com/vi/${song_link}/maxresdefault.jpg`} alt={song_name}/> */}
    </a>
  );
};

export default Song;
