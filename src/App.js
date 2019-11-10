import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 25
    };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this) 
  } 
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }
  reset() {
    this.setState({
      count: 0
    })
  }
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
            <span id="session-decrement" onClick={this.decrement}>
              <span id="line"></span>
            </span>
            <span id="session-increment" onClick={this.increment}>
              <span id="line"></span>
            </span>
            <span id="session-length" className="slider-preview">
              {this.state.count}
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
