import React from "react";
import ReactDOM from "react-dom";
import Settings from "./components/Settings";
import Cup from "./components/Cup";
import Game from './Game';
import './index.css';
import CupLogo from './assets/cup_too_full.png';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="App-nav">
          <img className="App-img1" src={CupLogo} alt="Coffee Cup"/>
          <h4>Coffee Game</h4>
          <img className="App-img2" src={CupLogo} alt="Coffee Cup"/>
        </div>
        <Game />
      </div>
    )
  }
}

if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./serviceWorker.js')
    .then(reg => console.log('Service Worker registered'))
    .catch(err => console.log(`Service Worker Error ${err}`))
  })
}


ReactDOM.render(<App />, document.getElementById("root"));

// // Hot Module Replacement
// if (module.hot) {
//   //dev mode
//   ReactDOM.render(<Game />, document.getElementById("root"));
//   module.hot.accept();
// } else {
//   // production mode
// }