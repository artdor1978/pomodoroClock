import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="center">
        <div className="leftHalf">
          <h1>Pomodoro Clock</h1>
        </div>
        <div className="rightHalf">
          <span id="break-label">Break Length</span>
          <span id="session-label">Session Length</span>
          <span id="break-decrement">-</span>
          <span id="break-length" className="slider-preview">
            5
          </span>
          <span id="break-increment">+</span>
          <span id="session-decrement">-</span>
          <span id="session-length" className="slider-preview">
            25
          </span>
          <span id="session-increment">+</span>
          <span id="timer-label">Session</span>
          <span id="time-left"></span>
          <span id="start_stop"></span>
          <span id="reset"></span>
        </div>
      </div>
    );
  }
}

export default App;
