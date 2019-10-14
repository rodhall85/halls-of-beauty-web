import React from 'react';

import images from './images/gallery';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery" id="gall">
        {images && images.map(i => {
          return (
            <img 
              className="image"
              key={i.id}
              src={i.src}
              title={i.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery