import React from 'react';
import style from './page.module.scss';

export const metadata = {
  title: 'Contact',
  description: 'Contact information page',
};

export default function Agenda() {
  return (
    <div className={style.sectionBackground}>
      <div className={style.sectionContainer}>
        <h2>Contact us!</h2>
      </div>
    </div>
  );
}
