import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <footer className="App-footer">
        <span className="footer-copyright">&copy; {new Date().getFullYear()} Halls of Beauty</span>
        <span className="footer-right">
          <a className="footer-email" href="mailto:bev.hall@outlook.com">bev.hall@outlook.com</a>
          |<span className="footer-phone">07513261203</span>
          |<a href="https://www.facebook.com/Halls-Of-Beauty-362920180445378">
            <img className="footer-facebook" src={require("./images/facebook.svg")} alt="facebook icon"></img>
          </a>
        </span>          
      </footer>
    );
  }
}

export default Footer