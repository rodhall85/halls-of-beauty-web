import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

import './Burger.css';


const Burger = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuStateChanged = (state) => {
    setMenuIsOpen(state.isOpen);
  }

  const closeMenu = () => {
    console.log('ggg');
    setMenuIsOpen(false);
  };

  return (
    <Router>
      <Menu className="menu" right onStateChange={ menuStateChanged } isOpen={ menuIsOpen }>
          <Link className="menu-item" to="#home" onClick={ closeMenu }>HOME</Link>
          <Link className="menu-item" to="#about" onClick={ closeMenu }>ABOUT ME</Link>
          <Link className="menu-item" to="#gall" onClick={ closeMenu }>GALLERY</Link>
          <Link className="menu-item" to="#promotions" onClick={ closeMenu }>PROMOTIONS</Link>
          <Link className="menu-item" to="#treatments" onClick={ closeMenu }>TREATMENTS</Link>
          <Link className="menu-item" to="#testimonials" onClick={ closeMenu }>TESTIMONIALS</Link>
          <Link className="menu-item" to="#contact" onClick={ closeMenu }>CONTACT</Link>
      </Menu>
    </Router>
  );
}

export default Burger