import React, { Component } from 'react';
import Game from "./components/Game"; 
import "./App.css"; 

class App extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
