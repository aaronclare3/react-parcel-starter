import React, { Component } from 'react'



class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDes: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.showDes(this.state.showDes);
        this.setState({showDes: true});
    }
    render(){
        return(
            <div>
                <h1>{this.state.showDes}</h1>
                <p>How to play the coffee game:</p>
                <p>The cups will fill from time to time. You can drink them empty by clicking on a cup. Try to drink all the cups before they get too full. The speed of the filling process will increase after time.</p>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="showDes">Don't show this description again</label>
                    <input type="checkbox" name="showDes" id="showDes"/>
                    <button>Start</button>
                </form>
            </div>
        )
    }
}




export default Description;