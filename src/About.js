import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render () {
    return (
      <div className="about-container">
        <div className="about" id="about">
          <h2 className="section-title">~ A little about me ~</h2>
          <div className="pic-bev">
            
          </div>
          <div className="write-up">
            <p>
              I've been a beauty therapist since 2007 
              in and around&nbsp;Whittlesey and have worked 
              with many&nbsp;clients.
            </p>
            <p>I'm a keen learner and I'm always updating 
              my skills by attending courses in-person and&nbsp;online.
            </p>
            <p>I'm rewarded each day with every client 
              I work with using my skills to help them 
              look and feel&nbsp;special.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About