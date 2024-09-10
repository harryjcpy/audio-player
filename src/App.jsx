

/*const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const audioRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="App">
      <Cassette isPlaying={isPlaying} />
      <Controls onPlayPause={togglePlayPause} isPlaying={isPlaying} />
      <MusicalNotes isPlaying={isPlaying} />
      <input type="file" accept="audio/*" onChange={handleFileChange} />
            {audioFile && (
        <audio
          ref={audioRef}
          src={audioFile}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
    </div>
  );
};

export default App;*/
/*
import React, { useState, useRef } from 'react';
import Cassette from './components/Cassette';
import Controls from './components/Controls';
import MusicalNotes from './components/MusicNotes';
import './App.css';

const App = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [songName, setSongName] = useState('');
  const audioRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(URL.createObjectURL(file));
      setSongName(file.name);
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (audioFile) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    if (audioRef.current.currentTime === audioRef.current.duration) {
      setIsPlaying(false);
    }
  };

  return (
    <div className="App">
      <Cassette isPlaying={isPlaying && audioFile} songName={songName} />
      <Controls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onRewind={handleRewind}
        onForward={handleForward}
        onFileUpload={handleFileUpload}
      />
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileUpload}
        className="file-input"
      />
      <MusicalNotes isPlaying={isPlaying} />
      {audioFile && (
        <audio
          ref={audioRef}
          src={audioFile}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

export default App;
*/

import React, { useState, useRef } from 'react';
import Cassette from './components/Cassette';
import Controls from './components/Controls';
import MusicalNotes from './components/MusicNotes';
import TimelineBar from './components/TimelineBar'; // Correctly import the TimelineBar component
import './App.css';

const App = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); // State for audio duration
  const [songName, setSongName] = useState('');
  const audioRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(URL.createObjectURL(file));
      setSongName(file.name);
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (audioFile) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    if (audioRef.current.currentTime === audioRef.current.duration) {
      setIsPlaying(false);
    }
  };

  const handleAudioLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <div className="App">
      <Cassette isPlaying={isPlaying && audioFile} songName={songName} />
      <Controls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onRewind={handleRewind}
        onForward={handleForward}
        onFileUpload={handleFileUpload}
      />
      <TimelineBar
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileUpload}
        className="file-input"
      />
      <MusicalNotes isPlaying={isPlaying} />
      {audioFile && (
        <>
          <audio
            ref={audioRef}
            src={audioFile}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleAudioLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          />
          {/* Include the TimelineBar component */}

        </>
      )}
    </div>
  );
};

export default App;
