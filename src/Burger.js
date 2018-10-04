import React, { Component } from 'react';
import './Burger.css';
import { slide as Menu } from 'react-burger-menu'
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";


class Burger extends Component {
  render () {
    return (
      <Router>
        <Menu className="menu" right>
            <Link className="menu-item" to="#home">HOME</Link>
            <Link className="menu-item" to="#about">ABOUT ME</Link>
            <Link className="menu-item" to="#treatments">TREATMENTS</Link>
            <Link className="menu-item" to="#testimonials">TESTIMONIALS</Link>
            <Link className="menu-item" to="#contact">CONTACT</Link>
        </Menu>
      </Router>
    );
  }
}

export default Burger