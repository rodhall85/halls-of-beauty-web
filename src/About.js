import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render () {
    return (
      <div className="about">
        <h2 className="section-title">A little about me</h2>
        <div className="pic-bev">
          
        </div>
        <div className="write-up">
          <p>
            I've been a beauty therapist since 2007 
            in and around Whittlesey and have worked 
            with many clients.
          </p>
          <p>I'm a keen learner and I'm always updating 
            my skills by attending courses in-person and online.
          </p>
          <p>I'm rewarded each day with every client 
            I work with using my skills to help them 
            look and feel special.
          </p>
        </div>
      </div>
    );
  }
}

export default About