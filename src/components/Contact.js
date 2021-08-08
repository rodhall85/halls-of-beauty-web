import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.defaults = {
      Name: '',
      Email: 'e.g. joe.bloggs@gmail.com',
      Phone: 'e.g. 07773000123',
      Message: ''
    };

    this.state = this.defaults;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    let newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    const body = `Name: ${this.state.Name} \r\nEmail: ${this.state.Email} \r\nPhone: ${this.state.Phone} \r\nMessage: ${this.state.Message}\r\n`;
    window.location.href="mailto:bev.hall@outlook.com?subject=Enquiry&body="+body;
    event.preventDefault();
  }

  handleFocus(event) {
    if (event.target.value === this.defaults[event.target.name]) {
      event.target.value = '';
    }
  }

  handleBlur(event) {
    if (event.target.value === '') {
      event.target.value = this.defaults[event.target.name];
    }
  }

  render () {
    return (
      <div className="contact-container">
        <div className="contact-form" id="contact">
          <h1 className="section-title">~ Get in touch ~</h1>
          <div className="contact-form-info">
            <p>Bourne, Peterborough, UK</p>
            <p><a href="mailto:bev.hall@outlook.com">bev.hall@outlook.com</a> | 07513261203</p>
            <br />
            <p>Appointments available from 9:30am to 8pm Mon -Fri</p>
            <p>Please leave me a message to book</p>
            <br />
          </div>
          <form onSubmit={this.handleSubmit}>
            <label className="contact-form-label">
              <p>
                Name:
              </p>
              <input className="contact-form-input" name="Name" default="" value={this.state.Name} onChange={this.handleInputChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
            </label>
            <label className="contact-form-label">
              <p>
                Email:
              </p>
              <input className="contact-form-input" name="Email" default="joe.bloggs@gmail.com" value={this.state.Email} onChange={this.handleInputChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
            </label>
            <label className="contact-form-label">
              <p>
                Phone:
              </p>
              <input className="contact-form-input" name="Phone" value={this.state.Phone} onChange={this.handleInputChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
            </label>
            <label className="contact-form-label">
              <p>
                Message:
              </p>
              <textarea className="contact-form-input" name="Message" value={this.state.Message} onChange={this.handleInputChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
            </label>
            <div className="contact-form-submit" onClick={this.handleSubmit}>Send</div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact