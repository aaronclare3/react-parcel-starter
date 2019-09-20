import React from "react";
import ReactDOM from "react-dom";
import Settings from "./components/Settings";
import Cup from "./components/Cup";
import Game from './Game';
import './index.css';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="App-nav">
          <h5>Coffee Game</h5>
        </div>

        <Game />
      </div>
    )
  }
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