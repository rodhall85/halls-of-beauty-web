import React, { Component } from 'react';
import './reset.css';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Testimonials from './Testimonials';
import Treatments from './Treatments';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app" id="home">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
