import React, { Component } from 'react';
import '../stylesheet/Cup.css';
import cup_empty from '../assets/cup_empty.png';
import cup_fill_1 from '../assets/cup_fill_1.png';
import cup_fill_2 from '../assets/cup_fill_2.png';
import cup_fill_3 from '../assets/cup_fill_3.png';
import cup_full from '../assets/cup_full.png';
import cup_too_full from '../assets/cup_too_full.png';
import { start } from 'repl';



class Cup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currImgIdx: -1,
            images: [cup_empty, cup_fill_1, cup_fill_2, cup_fill_3, cup_full, cup_too_full],
            killTimeout: false,
        }
        this.emptyCup = this.emptyCup.bind(this);
        this.cycleImages = this.cycleImages.bind(this);
    }
    
    emptyCup(){
        this.setState({currImgIdx: 0});
    }
    cycleImages(startNum){
        startNum++;
        let speedTime = 2;
        if(startNum > 10 && startNum < 20){
            speedTime = 1.5;
        }else if(startNum > 20 && startNum < 40){
            speedTime = 1.25;
        }else if(startNum > 40 && startNum < 60){
            speedTime = 1;
        }else if(startNum > 60){
            speedTime = .60;
        }
        let rand = Math.random() * speedTime;
        if(this.state.currImgIdx > 5){
            this.setState({currImgIdx: 5});
            this.props.checkGameOver(true);
            return;
        }else{
            this.setState(prevState => ({
                currImgIdx: prevState.currImgIdx + 1
            }))
        if(!this.state.killTimeout){
            setTimeout(this.cycleImages, rand * 1000, startNum);
        }
        }
    }
    componentDidMount(){
        this.setState({currImgIdx: -1});
        this.cycleImages(1);
    }

    componentWillUnmount(){
        this.setState({killTimeout: true})
    }
    render(){
        if(this.props.gameover){
            return(
                <img className="Cup-img" src={this.state.images[5]} />
            )
        }else{
            return(
                    <img className="Cup-img" onClick={this.emptyCup} src={this.state.images[this.state.currImgIdx]} />
            )

        }
    }
}



export default Cup;