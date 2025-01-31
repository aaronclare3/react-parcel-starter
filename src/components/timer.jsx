import React, { Component } from 'react';
import '../stylesheet/Timer.css';



class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // counter: 0,
            timerOn: false,
            timerStart: 0,
            timerTime: 0,
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    startTimer(){
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
          this.setState({
            timerTime: Date.now() - this.state.timerStart
          });
        }, 10);
      };

    stopTimer() {
      this.setState({ timerOn: false });
      clearInterval(this.timer);
    };
  
    componentDidMount(){
        this.startTimer();
    }
    componentWillUnmount(){
      this.props.getTime(("0" + (Math.floor(this.state.timerTime / 1000) % 60)).slice(-2), ("0" + (Math.floor(this.state.timerTime / 1000) % 60)).slice(-2))
      this.stopTimer();
    }

    render(){
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let newhigh = seconds > localStorage.getItem('highscore') && "New High score! Keep it going"
        return(
            <div className="Timer">
                <div className="Timer-clock">
                  <h3>{seconds}:{centiseconds}s</h3>
                </div>
                {this.state.timerOn === true && (
                  <button className="Timer-button" onClick={this.stopTimer}>Pause Timer</button>
                  )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                  <button className="Timer-button" onClick={this.startTimer}>Resume</button>
                  )}
                <h4>{newhigh}</h4>
            </div>
        )
    }
}


export default Timer;