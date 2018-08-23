import React, { Component } from 'react';
import './Burger.css';
import { slide as Menu } from 'react-burger-menu'

class Burger extends Component {
  render () {
    return (
      <Menu className="menu" right>
        <a id="home" className="menu-item" href="/">HOME</a>
        <a id="about" className="menu-item" href="/about">ABOUT ME</a>
        <a id="treatments" className="menu-item" href="/treatments">TREATMENTS</a>
        <a id="testimonials" className="menu-item" href="/testimonials">TESTIMONIALS</a>
        <a id="contact" className="menu-item" href="/contact">CONTACT</a>
      </Menu>
    );
  }
}

export default Burger