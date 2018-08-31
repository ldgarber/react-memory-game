import React, { Component } from "react";
import bkbc from '../images/bkbc.png'; 

//save for later
const bkbcImage = <img src={bkbc} alt="bkbc" className="ui image" />
const placeholderImage = <img src="/placeholder.png" alt="bkbc" className="ui image" />

const Front = (props) => (
  <div onClick={props.handleClick} className="ui card">
    <div className="content" style={{backgroundColor: props.card.color}}>
      <div className="header">Card: {props.card.value}</div>
    </div>
  </div>
); 

const Back = (props) => (
  <div onClick={props.handleClick} className="ui card" >
    {bkbcImage}
    <div className="content" >
      <div className="header">BKBC Memory!</div>
    </div>
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
