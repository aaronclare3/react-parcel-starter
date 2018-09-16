import React from "react";

function CupInput(props){
	<input type="number" 
	defaultValue={props.nbCups} 
	min="1" max="8"
	onChange={props.onChange}></input>
}

export default class Settings extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
		<div>
			<h5>Number of cups:</h5>
			<input type="number" 
				defaultValue={this.props.nbCups}
				min="1" max="8"
				onChange={this.props.handleCupNb}
			/>
			<button onClick={this.props.onStart}>Start</button>
		</div>
		);
	}

}