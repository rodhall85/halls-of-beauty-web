import React, { Component } from 'react';
import './TreatmentType.css';
import TreatmentSubCategory from './TreatmentSubCategory';

class TreatmentType extends Component {
  render () {
    const treatmentType = this.props.treatmentType;
    const imageName = require(`../images/${treatmentType.image.src}`).default;
    const styles = {
      background: treatmentType.backgroundColor
    }

    return (
      <div className="treatment-type" style={styles}>
        <div className="treatment-type-image-container">
          <img className="treatment-type-image" src={imageName} alt={treatmentType.image.alt}/>
        </div>
        <div className="treatment-type-name">{treatmentType.category}</div>
        {treatmentType.subCategories.map((subCat, i) => {
          return <TreatmentSubCategory key={i} data={subCat} />
        })}
      </div>
    );
  }
}

export default TreatmentType