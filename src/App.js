import React, { Component } from 'react';
import Header from "./components/Header";  
import Board from "./components/Board"; 

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Board />
      </div>
    );
  }
}

export default App;
