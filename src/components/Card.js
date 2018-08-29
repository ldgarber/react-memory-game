import React, { Component } from "react";

//save for later
const bkbcImage = <img src="/bkbc.png" alt="bkbc" className="ui image" />
const placeholderImage = <img src="/placeholder.png" alt="bkbc" className="ui image" />

const Front = (props) => (
  <div onClick={props.handleClick} className="ui card">
    {placeholderImage}
    <div className="content" style={{backgroundColor: props.card.color}}>
      <div className="header">Card Number: {props.card.value}</div>
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

  renderCard = () => {
    const card = this.props.card; 
    return (card.flipped) ? <Front key="front" handleClick={this.handleFrontClick} card={card} /> : <Back key="back" handleClick={this.handleClick} card={card} />;   
  }

  render() {
    return (
      <div className="ui card">
        {this.renderCard()}
      </div>
    );
  }
}

export default Card; 
