import React, { Component } from 'react';
import './Treatment.css';

class Treatment extends Component {
  render () {
    const treatment = this.props.data;

    return (
      <div className="treatment">
        <span className="treatment-name">{treatment.name}</span>
        <span className="treatment-price">{treatment.price}</span>
        <span className="treatment-description">{treatment.description}</span>
      </div>
    );
  }
}

export default Treatment