import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Intro from './Intro';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
