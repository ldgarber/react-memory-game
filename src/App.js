import React, { Component } from 'react';
import Card from "./components/Card"; 

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      size: 10, 
      cards: [], 
    }
    this.seedCards = this.seedCards.bind(this); 
  }

  randColor = () => {
    var color = '#'+ Math.floor(Math.random()*16777215).toString(16);  
    return color; 
  }

  seedCards() {
    for (var i=0; i<this.state.size; i++) {
      var cards = this.state.cards; 
      var color = this.randColor; 
      var card = {color: color, id: i} 
      cards.push(card); 
      cards.push(card); 
      this.setState(cards: cards) 
    }
  }

  componentWillMount(){
    this.seedCards();    
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui five doubling stackable cards">
          {this.renderCards()}
        </div>
      </div>
    );
  }

  renderCards() {
    return this.state.cards.map( (card, index) => {
      return <Card key={index} card={card} /> 
    })
  }
}

export default App;
