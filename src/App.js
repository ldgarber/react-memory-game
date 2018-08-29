import React, { Component } from 'react';
import Header from "./components/Header";  
import Game from "./components/Game"; 
import "./App.css"; 

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
