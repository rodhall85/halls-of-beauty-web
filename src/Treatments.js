import React, { Component } from 'react';
import './Treatments.css';
import TreatmentType from './TreatmentType';
import * as data from './data/treatments-data.json';

class Treatments extends Component {
  render () {
    return (
      <div className="treatments-container">
        <div className="treatments" id="treatments">
          {data.length > 0 && data.map((treatmentType, i) => {
            return <TreatmentType key={i} treatmentType={treatmentType} />
          })}
        </div>

        <div className="gift-vouchers">
          
        </div>
        <div className="gift-vouchers-text">
          <p>
            Gift vouchers available
          </p>
        </div>
      </div>
    );
  }
}

export default Treatments