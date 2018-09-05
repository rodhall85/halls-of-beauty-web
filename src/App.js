import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Testimonials from './Testimonials';
import Treatments from './Treatments';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <About />
        <Treatments />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
