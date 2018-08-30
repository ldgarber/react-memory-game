import React, { Component } from "react"; 
import Board from "./Board"; 

const Footer = () => (
  <div className="footer centered row">
    <copyright>Copyright © 2018 Leah Garber</copyright>
  </div>
)

class Game extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      won: false,  
      turns: 0, 
      board: ()=><Board incrementTurns={this.incrementTurns} />
    }
  }

  incrementTurns = () => {
    var turns = this.state.turns; 
    this.setState({ turns: turns + 1 })
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
      <div>
        <div className="ui menu"> 
          <a className="item">Memory Game</a>
          <div className="right menu">
            <div className="item">
              <h2>Turns: {this.state.turns}</h2>
            </div>
            <div className="item">
              <button className="ui button" onClick={this.newGame}>New game?</button>
            </div>
          </div>
        </div>  

        <div className="ui grid">
          <div className="row">
            <div className="two wide column"/>
            <div className="twelve wide column"><ActiveBoard /></div>
            <div className="two wide column"/>
          </div>
          <div className="spacer-row"></div>
          <Footer />
        </div>
      </div>
    ) 
  }
}

export default Game; 
