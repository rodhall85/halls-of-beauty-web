import React, { Component } from 'react';
// import logo from './logo.svg';
// import './Header.css';

// class Header extends Component {
//   render() {
//     return (
//       <header className="App-header">
//         <div className="App-title">Halls of Beauty</div>
//         <nav>
//           <a href="google.com">HOME</a>
//           <a href="google.com">ABOUT ME</a>
//           <a href="google.com">TREATMENTS</a>
//           <a href="google.com">TESTIMONIALS</a>
//           <a href="google.com">CONTACT</a>
//           <a href="google.com">F</a>
//         </nav>
//       </header>
//     );
//   }
// }

// export default Header;
import { slide as Menu } from 'react-burger-menu'

class Header extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
    return (
      <header className="App-header">
        <div className="App-title">Halls of Beauty</div>       
        <Menu right styles={ styles } >
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
      </header>
    );
  }
}

export default Header