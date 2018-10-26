import React from 'react';
import { Link } from 'react-router-dom';

const Song = props => {
  const { song_name, song_link, album_name, id } = props.song;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4 align-self-stretch">
      <div className="card shadow h-100">
        <a href={`https://www.youtube.com/watch?v=${song_link}`}>
          <img
            className="card-img-top"
            src={`https://img.youtube.com/vi/${song_link}/mqdefault.jpg`}
            alt={song_name}
          />
        </a>
        <Link className="card-header" to={`./${id}`}>
          <h5 className="card-title mb-0">{song_name}</h5>
        </Link>
        <div className="card-body">
          <p className="album-title mb-0">{album_name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
