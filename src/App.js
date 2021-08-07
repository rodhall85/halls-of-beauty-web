import React from 'react';

import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Promotions from './components/Promotions';
import Testimonials from './components/testimonials/Testimonials';
import Treatments from './components/Treatments';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './reset.css';
import './App.css';

const App = () => {
  return (
    <div className="app" id="home">
      <Header />
      <Intro />
      <About />
      <Promotions />
      <Treatments />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
