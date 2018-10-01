import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.defaults = {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message'
    };

    this.state = this.defaults;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleInputChange(event) {
    let newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    const body = `Name: ${this.state.name} \r\nEmail: ${this.state.email} \r\nPhone: ${this.state.phone} \r\nMessage: ${this.state.message}\r\n`;
    window.location.href="mailto:rodhall@hotmail.co.uk&subject=Enquiry&body="+body;
    event.preventDefault();
  }

  handleFocus(event) {
    event.target.select();
  }

  render () {
    return (
      <div className="contact">
        <div className="contact-form">
          <h2 className="section-title">~ Get in touch ~</h2>
          <div>
            <p>Whittlesey, Peterborough, UK</p>
            <p><a href="mailto:bev.hall@outlook.com">bev.hall@outlook.com</a> | 07513261203</p>
            <br />
            <p>Appointments available from 9:30am to 8pm Mon -Fri</p>
            <p>Please leave me a message to book</p>
            <br />
          </div>
          <form onSubmit={this.handleSubmit}>
            <input className="contact-form-input" name="name" value={this.state.name} onChange={this.handleInputChange} onFocus={this.handleFocus} />
            <input className="contact-form-input" name="email" value={this.state.email} onChange={this.handleInputChange} onFocus={this.handleFocus} />
            <input className="contact-form-input" name="phone" value={this.state.phone} onChange={this.handleInputChange} onFocus={this.handleFocus} />
            <textarea className="contact-form-input" name="message" value={this.state.message} onChange={this.handleInputChange} onFocus={this.handleFocus} />
            <input className="contact-form-submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact