# React Cassette Audio Player

An audio player application designed to look like a vintage cassette tape, built with React.js. The app allows users to upload audio files, play/pause, rewind, and fast-forward tracks. It also features a rotating cassette animation and a navigation bar for skipping through the song's timeline.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Features
- **Audio Upload**: Upload your own audio files directly from local storage.
- **Playback Controls**: Play, pause, rewind, and fast-forward through the track.
- **Song Timeline Navigation**: A visual bar to navigate through the song's timeline.
- **Cassette Animation**: The cassette's reels rotate while the audio is playing and stop when paused or ended.
- **Responsive Design**: Fully responsive and optimized for desktop and mobile devices.

## Demo
You can view a live demo of the project [here](https://main--golden-piroshki-418942.netlify.app/).

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/harryjcpy/audio-player.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd react-cassette-audio-player
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```

The app will run locally on [http://localhost:3000](http://localhost:3000).

## Usage

1. Click the **Upload** button to select an audio file from your device.
2. Use the **Play/Pause** button to control playback.
3. Use the **Rewind** and **Forward** buttons to skip backward or forward in the track.
4. Drag the **Song Timeline Navigation** bar to skip to any part of the song.

## Components

### 1. `Cassette.jsx`
- The main visual component that renders the cassette and its animations.
- Displays the song's title in a marquee style.

### 2. `Controls.jsx`
- Contains buttons for uploading audio, play/pause, rewind, and fast-forward.

### 3. `TimelineBar.jsx`
- A component for visual navigation through the song's timeline.

### 4. `MusicalNotes.jsx`
- Animates musical notes when the song is playing.

### 5. `App.jsx`
- The root component that brings together all other components and manages state.

## Technologies Used
- **React.js**: Frontend library for building the user interface.
- **CSS3**: Styling for animations and visual effects.
- **JavaScript (ES6+)**: Logic for managing audio playback and user interactions.
- **HTML5**: Structuring the application layout.

## Contributing

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request. Please ensure to follow the project's coding style and conventions.

---

### Acknowledgments
Thanks to [ChatGPT](https://openai.com/chatgpt) for assisting in building this project.
