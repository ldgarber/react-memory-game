import React, { Component } from "react";
import bkbc from '../images/bkbc.png'; 
import placeholder from '../images/placeholder.png'; 
import cardBack from '../images/card-back.png'; 

//save for later
const bkbcImage = <img src={bkbc} alt="bkbc" className="ui image" />
const cardBackImage = <img src={cardBack} alt="card-back" className="ui image" />
const placeholderImage = <img src={placeholder} alt="placeholder" className="ui image transparent" />

const Front = (props) => (
  <div onClick={props.handleClick} className="ui card" style={{backgroundColor: props.card.color}}>
    {placeholderImage}
    <div className="content" style={{backgroundColor: props.card.color}}>
      <div className="header">Card: {props.card.value}</div>
    </div>
  </div>
); 

const Back = (props) => (
  <div onClick={props.handleClick} className="ui card" >
    {cardBackImage}
  </div>
); 


class Card extends Component {
  constructor() {
    super(); 
    this.state = {
      isFlipped: false,  
    }
  }

  handleClick = (e) => {
    e.preventDefault(); 
    this.props.onClick(); 
  }

  handleFrontClick = (e) => {
    e.preventDefault(); 
    alert("Already flipped!") 
  }

  render() {
    const card = this.props.card; 

    return (card.flipped) ? <Front key="front" handleClick={this.handleFrontClick} card={card} /> : <Back key="back" handleClick={this.handleClick} card={card} />;   
     
  }
}

export default Card; 
