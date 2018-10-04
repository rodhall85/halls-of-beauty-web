import React, { Component } from 'react';
import './Testimonials.css';
import * as data from './data/testimonials.json';

class Testimonials extends Component {
  render () {
    return (
      <div className="testimonials" id="testimonials">
        <h2 className="section-title">~&nbsp;Testimonials&nbsp;~</h2>
        {data.map(testimonial => {
          return (
            <div className="testimonial">
              <div className="testimonial-quote"></div>
              <div className="testimonial-message">{testimonial.message}</div>
              <span className="testimonial-name">{testimonial.name},&nbsp;</span>
              <span className="testimonial-location">{testimonial.location}</span>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Testimonials