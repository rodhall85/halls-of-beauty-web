import React, { Component } from 'react';

import Treatment from './Treatment';
import './Promotions.css';

class Promotions extends Component {
  render () {
    return (
      <div className="promotions-container">
        <div className="promotions" id="promotions">
          <h2 className="section-title">~ Promotions ~</h2>
          <div className="refer-a-friend">
            <h3>
              Refer a friend and you both will receive 10%&nbsp;off your next&nbsp;treatment!
            </h3>
          </div>
          <hr />
          <div className="monthly-offer">
            <h3>
              *** February offer ***
            </h3>
            <Treatment data={{
                name: "Gelish toes",
                description: "File, cuticle tidy and application of gel. Lasts 6-8 weeks.",
                price: "12"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Promotions;