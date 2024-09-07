import React from 'react';
import './MusicNotes.css'; // Assuming your CSS is in a separate file

const MusicalNotes = ({ isPlaying }) => {
  if (!isPlaying) return null; 

  return (
    <div className="muzieknootjes">
      <div className="noot-1">&#9835; &#9833;</div>
      <div className="noot-2">&#9833;</div>
      <div className="noot-3">&#9839; &#9834;</div>
      <div className="noot-4">&#9834;</div>
    </div>
  );
};

export default MusicalNotes;

