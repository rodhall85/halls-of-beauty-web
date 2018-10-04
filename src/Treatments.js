import React, { Component } from 'react';
import './Treatments.css';
import TreatmentType from './TreatmentType';
import * as data from './data/treatments-data.json';

class Treatments extends Component {
  render () {
    return (
      <div className="treatments" id="treatments">
        <h2 className="section-title">~&nbsp;Treatments&nbsp;~</h2>
        {data.map(treatmentType => {
          return <TreatmentType treatmentType={treatmentType} />
        })}
      </div>
    );
  }
}

export default Treatments