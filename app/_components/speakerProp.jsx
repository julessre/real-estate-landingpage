import React from 'react';
import styles from './speakerProp.module.scss';

export default function SpeakerProp(props) {
  return (
    <div>
      <img src={props.url} alt="speaker" className={styles.propImage} />
      <p className={styles.propTitle}>{props.name}</p>
      <p className={styles.propCompany}>{props.company}</p>
    </div>
  );
}
