import React from 'react';
import styles from './sponsors.module.scss';

export default function Sponsors() {
  return (
    <div>
      <div className={styles.sectionBackgrounds}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2>Our Sponsors</h2>

            <div>Check out this year's incredible line-up.</div>
          </div>
          <div className={styles.logoBanner}>
            <img src="./Remax.png" alt="Logo Remax" className={styles.logo} />
            <img src="./EPRA.png" alt="Logo Epra" className={styles.logo} />
            <img src="./Redfin.png" alt="Logo Redfin" className={styles.logo} />
            <img
              src="./Sothebys.png"
              alt="Logo Sothebys"
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
