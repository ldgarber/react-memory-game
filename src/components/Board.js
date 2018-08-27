import React, { Component } from 'react';
import Card from "./Card"; 

class Board extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      size: 10, 
      cards: [], 
    }
  }

  randColor = () => {
    var color = '#'+ Math.floor(Math.random()*16777215).toString(16);  
    return color; 
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }



  seedCards = () => {
    for (var i=0; i<this.state.size; i++) {
      var cards = this.state.cards; 
      var color = this.randColor; 
      var card = {color: color, id: i} 
      cards.push(card); 
      cards.push(card); 
    }
    cards = this.shuffle(cards)
    this.setState(cards: cards) 

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

export default Board;
