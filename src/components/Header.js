import React, { Component } from 'react';
import './Header.css';
import Burger from './Burger';

class Header extends Component {
  render () {
    return (
      <header className="header">
        <span className="logo" />
        <h1 className="title">Halls of Beauty</h1>
        <Burger />
      </header>
    );
  }
}

export default Header