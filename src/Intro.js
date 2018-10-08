import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render () {
    return (
      <div>
        <div className="background-image" />
        <div className="slogan-container">
          <div className="slogan">
            <div>Be beautiful.</div>
            <div>Be yourself.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro