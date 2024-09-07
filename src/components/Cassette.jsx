import React from 'react';
import './Cassette.css';

const Cassette = ({ isPlaying, songName }) => {
  return (
    <div className="cassette">
      <div className="disc-container">
        <div className="label"></div>
        <div className={`disc ${isPlaying ? 'rotate' : ''}`}>
          <div className="disc-center"></div>
          <div className="disc-needle"></div>
        </div>
        <div className={`disc ${isPlaying ? 'rotate' : ''}`}>
          <div className="disc-center"></div>
          <div className="disc-needle"></div>
        </div>
        {songName && (
          <div className="song-name">
            <div className="marquee">
              <span>{songName}</span>
            </div>
          </div>
        )}
      </div>
      <div className="cassette-body">
        <div className="tape-window"></div>
      </div>
      <div className="screw screw-1"></div>
      <div className="screw screw-2"></div>
      <div className="screw screw-3"></div>
      <div className="screw screw-4"></div>
    </div>
  );
};

export default Cassette;






