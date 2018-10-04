import React, { Component } from 'react';
import Treatment from './Treatment';
import './TreatmentSubCategory.css';

class TreatmentSubCategory extends Component {
  render () {
    const subCat = this.props.data;

    return (
      <div className="treatment-sub-category">
        <span className="treatment-sub-category-name">{subCat.name}</span>
        <span className="treatment-sub-category-description">{subCat.description}</span>
          {subCat.treatments.map(treatment => {
            return (
                <Treatment data={treatment} />
            )
          })}
      </div>
    )
  }
}

export default TreatmentSubCategory