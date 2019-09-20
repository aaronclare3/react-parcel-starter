import React, { Component } from 'react';
import './Settings.css';


class Settings extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          numCups: 1
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.add = this.add.bind(this);
      this.subtract = this.subtract.bind(this);
    }
  
    handleChange(e) {
      this.setState({numCups: e.target.value});
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.getNumCups(this.state.numCups);
      this.setState({numCups: 1});
    }

    add(e){
        e.preventDefault();
        this.setState(st => {return {numCups: st.numCups + 1};})
    }
    subtract(e){
        e.preventDefault();
        this.setState(st => {return {numCups: st.numCups - 1};})
    }
  
    render() {
      return (
          <div className="Settings">
            <form onSubmit={this.handleSubmit}>
            <label htmlFor='numCups'>Number of Cups:</label>
                <div className="Settings-input">
                    <input id="numCups" name="numCups" type="number" min={1} max={8} value={this.state.numCups} onChange={this.handleChange} />
                    <button onClick={this.add}>⬆️</button>
                    <button onClick={this.subtract}>⬇️</button>
                </div>
            <button className="Settings-submit">Start Game!</button>
            </form>
          </div>
      );
    }
  }


  export default Settings;