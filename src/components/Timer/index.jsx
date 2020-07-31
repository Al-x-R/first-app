import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    };
    this.intervalId = null;
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newDate = new Date(time.getTime());
      newDate.setSeconds(newDate.getSeconds() + 1);

      return {
        time: newDate,
      };
    });
  };

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }
  


  twoDigit(v) {
    return v > 9 ? v : `0${v}`;
  }

  stopTime = () => {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  render() {
    const { time } = this.state;
    const hours = this.twoDigit(time.getHours());
    const minutes = this.twoDigit(time.getMinutes());
    const seconds = this.twoDigit(time.getSeconds());

    return (
        <>
        <div>{`${hours}:${minutes}:${seconds}`}</div>
        <button onClick={this.stopTime}>stop</button>
        </>
    ) 
  }
}

export default Timer;
