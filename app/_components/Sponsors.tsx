import './sponsors.scss';
import React from 'react';

export default function Sponsors() {
  return (
    <div>
      <div className="sectionBackgrounds">
        <div className="sectionContainer">
          <div className="sectionHeader">
            <h2>Our Sponsors</h2>

            <div>Check out this year's incredible line-up.</div>
          </div>
          <div className="logoBanner">
            <img src="./Remax.png" alt="Logo Remax" className="logo" />
            <img src="./EPRA.png" alt="Logo Epra" className="logo" />
            <img src="./Redfin.png" alt="Logo Redfin" className="logo" />
            <img src="./Sothebys.png" alt="Logo Sothebys" className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
