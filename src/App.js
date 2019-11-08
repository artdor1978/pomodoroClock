import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="leftHalf">
          <h1>Pomodoro Clock</h1>
        </div>
        <div className="rightHalf">
          <div className="flipClock">
            <span id="timer-label">Session</span>
            <span id="time-left"></span>
          </div>
          <div className="timeSlider">
            <span id="session-label">Session Length</span>
            <span id="session-decrement">
              <span id="line"></span>
            </span>
            <span id="session-increment">
              <span id="line"></span>
            </span>
            <span id="session-length" className="slider-preview">
              25
            </span>
          </div>
          <div className="timeSlider">
            <span id="break-label">Break Length</span>
            <span id="break-decrement">
              <span id="line"></span>
            </span>
            <span id="break-increment">
              <span id="line"></span>
            </span>
            <span id="break-length" className="slider-preview">
              5
            </span>
          </div>
          <span id="start_stop"></span>
          <span id="reset"></span>
        </div>
      </div>
    );
  }
}

export default App;
