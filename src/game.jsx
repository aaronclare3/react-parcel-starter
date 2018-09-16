import React from "react";
import Cup from "./components/cup.jsx";
import Settings from "./components/settings.jsx";
import Description from "./components/description.jsx";
import styled from "styled-components";
import "./stylesheet/game.css";

const ColumnFlex = styled.div`
 	display: flex;
 	flex-direction: column;
 	align-items: center;
`

const CupFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`

export default class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nbCups: 1,
			noDescription: false,
			descriptionTime: false,
			gameTime: false,
			defaultTimeout: 2000,
			gameover: false
		};
		this.handleStart = this.handleStart.bind(this);
		this.updateNbCups = this.updateNbCups.bind(this);
		this.handleGameOver = this.handleGameOver.bind(this);
	}

	updateNbCups(e){;
		e.preventDefault();
		let newVal = e.target.value;
		this.setState({nbCups: newVal});
	}

	renderSettings(){
		return (
			<Settings nbCups={this.state.nbCups}
				handleCupNb={this.updateNbCups}
				onStart={this.handleStart} />
		);
	}

	gameActions(){
		if (this.state.gameover)
			return (
				<ColumnFlex className="columnFlex">
					<h2>GAME OVER</h2>
					<button onClick={this.handleStart}>Retry</button>
					<button onClick={() => this.setState({gameTime: false, descriptionTime: false})}>Change settings</button>
				</ColumnFlex>
				);
		return (
				<button>Pause</button>
			);
	}

	handleGameOver(){
		this.setState({gameover: true});
	}

	renderDescription(){
		return(
			<Description gameIsNext={true} onStart={(e) => this.handleStart(e, true)} />
		);
	}

	handleStart(e, gameTime){
		this.state.gameover = false;
		gameTime || localStorage.getItem("noDescription") == "true" ? this.setState({gameTime: true, descriptionTime: false}) : this.setState({gameTime: false, descriptionTime: true});
	}

	renderCups(){
		let cups = [];
		for (var i = 0; i < this.state.nbCups; i++) {
			cups.push(<Cup handleGameOver={this.handleGameOver} defaultTimeout={this.state.defaultTimeout} />);
		}
		return(
			<CupFlex>
				{cups}
			</CupFlex>);
	}
	render(){
		if (this.state.gameTime)
			return (
				<ColumnFlex>
					{this.renderCups()}
					{this.gameActions()}
				</ColumnFlex>
			);
		if (this.state.descriptionTime)
			return this.renderDescription();
		return this.renderSettings();
	}
}