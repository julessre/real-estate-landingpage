import React from 'react';
import styles from './speaker.module.scss';
import speakerProp from './speakerProp';
import SpeakerProp from './speakerProp';
import stylesProp from './speakerProp.module.scss';

export default function Speaker() {
  return (
    <div className={styles.sectionBackground}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2>Speaker Lineup</h2>
          <p>
            We will welcome 20+ speakers from leading organizations. All of our
            speakers are actively involved in real estate innovation. Check out
            a snapshot of our speaker lineup below!
          </p>
        </div>
      </div>
      <div className={stylesProp.propGrid}>
        <div className={stylesProp.propCard}>
          <SpeakerProp
            url="/user.png"
            name="Sophie Casey"
            company="Head of Proptech & Innovation - Nuveen Real Estate"
          />{' '}
        </div>{' '}
        <div className={stylesProp.propCard}>
          <SpeakerProp
            url="/user.png"
            name="Anna Wenger"
            company="Senior Vice President - RE/MAX"
          />
        </div>
        <div className={stylesProp.propCard}>
          <SpeakerProp
            url="/user.png"
            name="Victor Muller"
            company="COO - Sotheby's"
          />
        </div>
        <div className={stylesProp.propCard}>
          <SpeakerProp
            url="/user.png"
            name="Claudia Zangl"
            company="Managing Director - DECUS Immobilien GmBH"
          />
        </div>
        <div className={stylesProp.propCard}>
          <SpeakerProp
            url="/user.png"
            name="Max Smith"
            company="CEO - Immoscout 24"
          />
        </div>
        <div className={stylesProp.propCard}>
          <SpeakerProp
            url="/user.png"
            name="Lukas Bauer"
            company="Head of Innovation - Vienna Real Estate"
          />
        </div>
      </div>
      <div>
        <button className={styles.ticketButton}>Register here!</button>
      </div>
    </div>
  );
}
