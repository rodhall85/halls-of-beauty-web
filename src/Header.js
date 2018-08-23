import React, { Component } from 'react';
// import logo from './logo.svg';
import './Header.css';
import Burger from './Burger';
import { slide as Menu } from 'react-burger-menu'

class Header extends Component {
  render () {
    return (
      <header className="App-header">
        <div className="App-title">Halls of Beauty</div>   
        <Burger />
      </header>
    );
  }
}

export default Header