import React, { Component } from 'react';

import Treatment from './Treatment';
import './Promotions.css';

class Promotions extends Component {
  render () {
    return (
      <div className="promotions-container">
        <div className="promotions" id="promotions">
          <h1 className="section-title">~ Promotions ~</h1>
          <div className="refer-a-friend">
            <h2>
              Refer a friend and you both will receive 10%&nbsp;off your next&nbsp;treatment!
            </h2>
          </div>
          <hr />
          <div className="monthly-offer">
            <h3>
              *** September offer ***
            </h3>
            <Treatment data={{
                name: "Facial and back massage",
                description: "",
                price: "30"
              }}
            />
            <Treatment data={{
                name: "Facial and Gelish hands or feet",
                description: "",
                price: "30"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Promotions;