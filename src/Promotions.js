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
            <h3>
              Refer a friend and you both will receive 10%&nbsp;off your next&nbsp;treatment!
            </h3>
          </div>
          <hr />
          <div className="monthly-offer">
            <h3>
              *** Post-covid offer ***
            </h3>
            <Treatment data={{
                name: "Gelish hands & feet application",
                description: "Lasts 2\xa0-\xa04\xa0weeks on hands and 6\xa0-\xa08\xa0weeks on\xa0feet.",
                price: "30"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Promotions;