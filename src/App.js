import React, { Component } from 'react';
import Board from "./components/Board"; 

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
    }
  }

  render() {
    return (
      <Board />
    );
  }
}

export default App;
