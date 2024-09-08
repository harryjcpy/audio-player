import React from 'react';
import './TimelineBar.css';

const TimelineBar = ({ currentTime, duration, onSeek }) => {
  const handleChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    onSeek(newTime);
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div className="timeline-bar-container">
      <input
        type="range"
        className="timeline-bar"
        value={progressPercentage || 0}
        onChange={handleChange}
        min="0"
        max="100"
      />
    </div>
  );
};

export default TimelineBar;
