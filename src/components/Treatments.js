import React, { Component } from 'react';
import './Treatments.css';
import TreatmentType from './TreatmentType';
import data from '../data/treatments-data.js';

class Treatments extends Component {
  render () {
    return (
      <div className="treatments-container">
        <div className="treatments" id="treatments">
          <h1 className="section-title">~&nbsp;Treatments&nbsp;~</h1>
          {data.length > 0 && data.map((treatmentType, i) => {
            return <TreatmentType key={i} treatmentType={treatmentType} />
          })}
        </div>
      </div>
    );
  }
}

export default Treatments