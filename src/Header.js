import React, { Component } from 'react';
// import logo from './logo.svg';
import './Header.css';
import Burger from './Burger';
import { slide as Menu } from 'react-burger-menu'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <h1 className="title">Halls of Beauty</h1>
        <Burger />
      </header>
    );
  }
}

export default Header