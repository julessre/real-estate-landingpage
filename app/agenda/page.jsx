import React from 'react';
import style from './page.module.scss';

const agenda = [
  {
    id: 1,
    day: 'Oct 1',
    time: '10-11h',
    session: 'Lorem ipsum dolor sit amet',
    room: 'Plenary Room',
  },
  {
    id: 2,
    day: 'Oct 1',
    time: '11-12h',
    session: 'Lorem ipsum dolor sit amet',
    room: 'Plenary Room',
  },
  {
    id: 3,
    day: 'Oct 1',
    time: '12-13h',
    session: 'Lorem ipsum dolor sit amet',
    room: 'Plenary Room',
  },
  {
    id: 4,
    day: 'Oct 1',
    time: '13-14h',
    session: 'Lorem ipsum dolor sit amet',
    room: 'Plenary Room',
  },
  {
    id: 5,
    day: 'Oct 2',
    time: '10-11h',
    session: 'Lorem ipsum dolor sit amet',
    room: 'Plenary Room',
  },
  {
    id: 6,
    day: 'Oct 2',
    time: '11-12h',
    session: 'Lorem ipsum dolor sit amet',
    room: 'Plenary Room',
  },
  {
    id: 7,
    day: 'Oct 2',
    time: '12-13h',
    session: 'Lorem ipsum dolor sit amet',
    room: 'Plenary Room',
  },
  {
    id: 8,
    day: 'Oct 2',
    time: '13-14h',
    session: 'Lorem ipsum dolor sit amet',
    room: 'Plenary Room',
  },
  {
    id: 9,
    day: 'Oct 3',
    time: '10-11h',
    session: 'Lorem ipsum dolor sit amet',
    room: 'Plenary Room',
  },
  {
    id: 10,
    day: 'Oct 3',
    time: '11-12h',
    session: 'Lorem ipsum dolor sit amet',
    room: 'Plenary Room',
  },
];

export default function Agenda() {
  return (
    <div className={style.sectionBackground}>
      <div className={style.sectionContainer}>
        <h2 className={style.tableHeader}>Conference Agenda</h2>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Session</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>
            {agenda.map((agenda) => (
              <tr key={`agenda-${agenda.id}`}>
                <td className={style.rows}>{agenda.day}</td>
                <td className={style.rows}>{agenda.time}</td>
                <td className={style.rows}>{agenda.session}</td>
                <td className={style.rows}>{agenda.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
