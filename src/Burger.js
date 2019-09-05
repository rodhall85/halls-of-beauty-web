import React, { Component } from 'react';
import './Burger.css';
import { slide as Menu } from 'react-burger-menu'
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";


class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false
    };

    this.menuStateChanged = this.menuStateChanged.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  menuStateChanged(state) {
    const newState = { menuIsOpen: state.isOpen }
    this.setState(newState);
  }

  closeMenu() {
    this.setState({ menuIsOpen: false });
  }

  render () {
    const isMenuOpen = state => {
      return state.isOpen;
    }

    return (
      <Router>
        <Menu className="menu" right onStateChange={ isMenuOpen } isOpen={ this.state.menuIsOpen }>
            <Link className="menu-item" to="#home" onClick={ this.closeMenu }>HOME</Link>
            <Link className="menu-item" to="#about" onClick={ this.closeMenu }>ABOUT ME</Link>
            <Link className="menu-item" to="#promotions" onClick={ this.closeMenu }>PROMOTIONS</Link>
            <Link className="menu-item" to="#treatments" onClick={ this.closeMenu }>TREATMENTS</Link>
            <Link className="menu-item" to="#testimonials" onClick={ this.closeMenu }>TESTIMONIALS</Link>
            <Link className="menu-item" to="#contact" onClick={ this.closeMenu }>CONTACT</Link>
        </Menu>
      </Router>
    );
  }
}

export default Burger