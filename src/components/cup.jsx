import React, { Component } from 'react';
import cup_empty from '../assets/cup_empty.png';
import cup_fill_1 from '../assets/cup_fill_1.png';
import cup_fill_2 from '../assets/cup_fill_2.png';
import cup_fill_3 from '../assets/cup_fill_3.png';
import cup_full from '../assets/cup_full.png';
import cup_too_full from '../assets/cup_too_full.png';



class Cup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emptyCup: false,
            currImgIdx: -1,
            images: [cup_empty, cup_fill_1, cup_fill_2, cup_fill_3, cup_full, cup_too_full],
            click: 0,
        }
        this.emptyCup = this.emptyCup.bind(this);
        this.cycleImages = this.cycleImages.bind(this);
    }
    emptyCup(){
        this.setState({currImgIdx: 0});
    }
    cycleImages(){
        let rand = Math.floor(Math.random() * 2);
        if(this.state.currImgIdx > 5){
            this.setState({currImgIdx: 5});
            this.props.checkGameOver(true);
            return;
            // this.setState({currImgIdx: 5});
        }else{
            this.setState(prevState => ({
                currImgIdx: prevState.currImgIdx + 1
            }))
            setTimeout(this.cycleImages, rand * 1000);
        }
        // let cycle = setInterval(() => {
        //     this.setState(prevState => ({
        //         currImgIdx: prevState.currImgIdx + 1
        //     }))
        // }, Math.random() * 2000)
    }
    componentDidMount(){
        this.cycleImages();
    }
    componentWillUnmount(){
    }
    render(){
        if(this.props.gameover){
            return(
                <img src={this.state.images[5]} />
            )
        }else{
            return(
                <img onClick={this.emptyCup} src={this.state.images[this.state.currImgIdx]} />
            )

        }
    }
}



export default Cup;