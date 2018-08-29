import React, { Component } from "react"; 
import Board from "./Board"; 

class Game extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      won: false,  
      board: ()=><Board />
    }
  }

  handleWin = () => {
    alert("you won!")
  }

  newGame = () => {
    this.setState({
      board: ()=><Board /> 
    })
  }

  render() {
    const ActiveBoard = this.state.board; 
    return (
      <div className="ui grid">
        <div className="centered row"><button className="ui button centered" onClick={this.newGame}>New game?</button></div>
        <div className="row">
          <div className="three wide column"/>
          <div className="ten wide column"><ActiveBoard /></div>
          <div className="three wide column"/>
        </div>
      </div>
    ) 
  }
}

export default Game; 
