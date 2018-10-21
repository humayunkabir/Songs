import React from 'react';

const Song = props => {
  const { song_name, song_link, album_name } = props.song;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4 align-self-stretch">
      <div className="card shadow h-100">
        <a
          href={`https://www.youtube.com/watch?v=${song_link}`}
          target="_blank"
        >
          <img
            className="card-img-top"
            src={`https://img.youtube.com/vi/${song_link}/mqdefault.jpg`}
            alt={song_name}
          />
        </a>
        <div className="card-header">
          <h5 className="card-title mb-0">{song_name}</h5>
        </div>
        <div className="card-body">
          <p className="album-title mb-0">{album_name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
