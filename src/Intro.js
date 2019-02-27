import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render () {
    return (
      <div>
        <header className="header">
          <span className="logo" />
          <h1 className="title">Halls of Beauty</h1>
        </header>
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