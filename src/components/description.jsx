import React, { Component } from 'react';
import '../stylesheet/Description.css';



class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            skipDes: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({skipDes: !this.state.skipDes})
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.startGame();
        if(this.state.skipDes){
            localStorage.setItem('skipDes', true)
        }else{
            localStorage.setItem('skipDes', false)
        }
    }
    render(){
        return(
            <div>
                <p>How to play the coffee game:</p>
                <p>The cups will fill from time to time. You can drink them empty by clicking on a cup. Try to drink all the cups before they get too full. The speed of the filling process will increase after time.</p>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="skipDes">Don't show this description again</label>
                    <input type="checkbox" name="skipDes" id="skipDes" onChange={this.handleChange} checked={this.state.skipDes}/>
                    <button className="Description-button">Start</button>
                </form>
            </div>
        )
    }
}




export default Description;