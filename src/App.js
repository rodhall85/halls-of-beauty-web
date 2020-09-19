import React, { Component } from 'react';
import './reset.css';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Promotions from './Promotions';
import Testimonials from './testimonials/Testimonials';
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
        <About />
        {/* <Promotions /> */}
        <Treatments />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
