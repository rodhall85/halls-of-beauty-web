import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <footer>
        <div className="footer-top">
          <div className="footer-copyright">&copy; {new Date().getFullYear()} Halls of Beauty</div>
          <div className="footer-facebook">
            <a href="https://www.facebook.com/Halls-Of-Beauty-362920180445378">
              <img src={require("./images/facebook.svg")} alt="facebook icon"></img>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <a className="footer-email" href="mailto:bev.hall@outlook.com">bev.hall@outlook.com</a>
          </div>
          <div className="footer-phone">07513261203</div>
        </div>          
      </footer>
    );
  }
}

export default Footer