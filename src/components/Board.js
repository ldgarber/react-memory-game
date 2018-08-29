import React, { Component } from 'react';
import Card from "./Card"; 
import { SIZE} from "../constants"; 

class Board extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      size: SIZE, 
      cards: [], 
      flipped: [] 
    }
  }

  componentDidUpdate() {
    if (this.gameOver() ){
      console.log("game over")
    } 
  }

  gameOver = () => {
    return this.state.cards.every(card => card.flipped === true ); 
  }

  handleCardClick = (index) => {
    var cards = this.state.cards; 
    var flipped = this.state.flipped; 
    var newCard = cards[index]; 

    //toggle 'flipped' = false is back showing
    newCard.flipped = !newCard.flipped; 
    cards[index] = newCard; 
    flipped.push(newCard); 
    this.setState({
      cards: cards, 
      flipped: flipped
    }) 
   
    if ((flipped.length === 2) && !this.gameOver() ) {
      setTimeout(this.checkForMatches, 200)
    }
   console.log(this.state)
  }

  checkForMatches = () => {
    var flipped = this.state.flipped; 
    var cards = this.state.cards; 

    if (flipped[0].value === flipped[1].value) {
      this.setState({flipped: []}) 
      alert("Found a match!"); 
    } else {
      //unflip card 1
      var id1 = flipped[0].id
      var card1 = cards.find(card => card.id === id1)
      card1.flipped = !card1.flipped; 

      //unflip card 2
      var id2 = flipped[1].id
      var card2 = cards.find(card => card.id === id2)
      card2.flipped = !card2.flipped;  

      this.setState({ cards: cards, flipped: []})
      alert("No match!"); 
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
    for (var i=0; i<this.state.size; i+=2) {
      var cards = this.state.cards; 
      var color = this.randColor(); 
      var card = {color: color, id: i,  value: i, flipped: false} 
      var cardDupe = {color: color, id: i+1, value: i, flipped: false }
      cards.push(card); 
      cards.push(cardDupe); 
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
      return <Card key={index} card={card} onClick={this.handleCardClick.bind(this, index)} /> 
    })
  }
}

export default Board;
