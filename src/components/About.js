import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render () {
    return (
      <div className="about-container">
        <div className="about" id="about">
          <h1 className="section-title">~ A little about me ~</h1>
          <div className="pic-bev">
            
          </div>
          <div className="write-up">
            <h2>I love to perform beauty treatments in <strong>Bourne</strong> and <strong>surrounding areas</strong>.</h2>
            <p>
              I've been a <strong>beauty therapist</strong> since <strong>2007 </strong> 
              in and around&nbsp;Whittlesey (recently move to&nbsp;<strong>Bourne</strong>) and have worked 
              with many&nbsp;clients.
            </p>
            <p>I'm a keen learner and I'm always updating 
              my skills by attending courses in-person and&nbsp;online.
            </p>
            <p>I'm rewarded each day with every client 
              I work with using my skills to help them 
              look and feel&nbsp;<strong>special</strong>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About