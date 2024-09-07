import React from 'react';
import './Controls.css';
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { IoIosSkipBackward } from "react-icons/io";
import { IoIosSkipForward } from "react-icons/io";

const Controls = ({ isPlaying, onPlayPause, onRewind, onForward }) => {
  return (
    <div className="controls">
      <button className="btn btn-primary back-button" onClick={onRewind}><IoIosSkipBackward /></button>
      <button className="btn btn-primary play-button" onClick={onPlayPause}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
      <button className="btn btn-primary next-button" onClick={onForward}><IoIosSkipForward /></button>
    </div>
  );
};

export default Controls;



