import React, { Component } from 'react';
import './Treatment.css';

class Treatment extends Component {
  render () {
    const { name, price, description } = this.props.data;

    return (
      <div className="treatment">
        <span className="treatment-name">{name}</span>
        <span className="treatment-price">&pound;{price}</span>
        <span className="treatment-description">{description}</span>
      </div>
    );
  }
}

export default Treatment