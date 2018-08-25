import React, { Component } from "react";

const Front = (props) => (
  <div onClick={props.handleClick} className="ui card">
    <img src="/placeholder.png" alt="placeholder" className="ui image" />
    <div className="content">
      <div className="header">Card Number: {props.card.id}</div>
    </div>
  </div>
); 

const Back = (props) => (
  <div onClick={props.handleClick} className="ui card">
    <img src="/placeholder.png" alt="placeholder" className="ui image" />
    <div className="content">
      <div className="header">BACK!</div>
    </div>
  </div>
); 


class Card extends Component {
  constructor() {
    super(); 
    this.state = {
      isFlipped: false,  
    }
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick(e) {
    e.preventDefault(); 
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  renderCard = () => {
    const card = this.props.card; 
    return (this.state.isFlipped) ? <Front key="front" handleClick={this.handleClick} card={card} /> : <Back key="back" handleClick={this.handleClick} card={card} />;   
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
