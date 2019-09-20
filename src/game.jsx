import React, { Component } from 'react';
import Cup from './components/Cup';
import Gameover from './components/Gameover';
import Timer from './components/Timer';
import Description from './components/Description';
import Settings from './components/Settings';
import './stylesheet/Game.css';


class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            numCups: 1,
            overflow: false,
            gameOver: false,
            gameRunning: false,
            settings: true,
            description: false,
            endtime: 0,
            newHighScore: false,
        }
        this.getNumCups = this.getNumCups.bind(this);
        this.startGame = this.startGame.bind(this);
        this.checkGameOver = this.checkGameOver.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.changeSettings = this.changeSettings.bind(this);
        this.getTime = this.getTime.bind(this);
    }

    getNumCups(num){
        this.setState({numCups: num});
        this.setState({description: true});
        this.setState({settings: false});
    }

    startGame(num){
        this.setState({numCups: num})
        this.setState({gameRunning: true});
        this.setState({description: false});
        this.setState({settings: false});
    }
    checkGameOver(status){
        console.log("in game jsx")
        this.setState({gameRunning: false});
        this.setState({description: false});
        this.setState({settings: false});
        this.setState({overflow: true});
        this.setState({gameOver: true});
    }
    resetGame(){
        this.setState({gameRunning: true});
        this.setState({description: false});
        this.setState({settings: false});
        this.setState({overflow: false});
        this.setState({gameOver: false});
    }
    changeSettings(){
        this.setState({gameRunning: false});
        this.setState({description: false});
        this.setState({settings: true});
        this.setState({overflow: false});
        this.setState({gameOver: false});
    }

    getTime(seconds,milli){
        let getHighScore = localStorage.getItem('highscore');
        this.setState({
            endtime: `${seconds}:${milli}`, newHighScore: false
        })
        
        if(getHighScore == null){
            localStorage.setItem('highscore', seconds);
            this.setState({newHighScore: true})
        }else if(seconds > getHighScore){
            this.setState({newHighScore: true})
            localStorage.setItem('highscore', seconds)
        }
    }

    render(){
        if(this.state.settings){
            return(
                <Settings startGame={this.startGame} getNumCups={this.getNumCups}/>
            )
        }else if(this.state.description){
            return(
                <Description startGame={this.startGame}/>
            )
        }else if(this.state.gameRunning){
            let cups = []
            for (let i = 0; i < this.state.numCups; ++i){
                cups.push(<Cup checkGameOver={this.checkGameOver} gameover={false} emptyCup={this.emptyCup}/>)
            }
            return(
                <div>
                    {cups}
                    <Timer getTime={this.getTime}/>
                </div>
            )
        }else if(this.state.overflow){
            let cups = []
            for (let i = 0; i < this.state.numCups; ++i){
                cups.push(<Cup checkGameOver={this.checkGameOver} gameover={true} emptyCup={5}/>)
            }
            return (
                <div>
                    {cups}
                    <Gameover/>
                    <h3>Your Score: {this.state.endtime}s</h3>
                    <h4>{this.state.newHighScore ? "Woah you beat the high score!!" : "Better Luck Next Time 😢"}</h4>
                    <h4>{this.state.newHighScore ? "New High Score 💪" : "Current High Score"} : {localStorage.getItem('highscore') == null ? "No high score set" : localStorage.getItem('highscore')+ "s"}</h4>
                    <button className="Game-button" onClick={this.resetGame}>Retry</button>
                    <button className="Game-button" onClick={this.changeSettings}>Change Settings</button>
                </div>
            )
        }else{
            return <h1>Hello there</h1>
        }
    }
}





export default Game;