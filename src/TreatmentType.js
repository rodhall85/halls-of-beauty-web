import React, { Component } from 'react';
import './TreatmentType.css';
import TreatmentSubCategory from './TreatmentSubCategory';

class TreatmentType extends Component {
  render () {
    const treatmentType = this.props.treatmentType;
    const imageName = require(`${treatmentType.image.src}`);
    const styles = {
      background: treatmentType.backgroundColor
    }

    return (
      <div className="treatment-type" style={styles}>
        <img className="treatment-type-image" src={imageName} alt={treatmentType.image.alt}/>
        <div className="treatment-type-name">{treatmentType.category}</div>
        {treatmentType.subCategories.map((subCat, i) => {
          return <TreatmentSubCategory key={i} data={subCat} />
        })}
      </div>
    );
  }
}

export default TreatmentType