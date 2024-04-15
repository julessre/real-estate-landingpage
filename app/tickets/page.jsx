import React from 'react';
import styles from './page.module.scss';

export const metadata = {
  title: 'Ticket page',
  description: 'This page shows all the tickets',
};

const tickets = [
  {
    id: 1,
    name: 'Full Conference Ticket',
    days: '1-3 Oct',
    costs: '300 €',
  },
  {
    id: 2,
    name: 'Day Ticket',
    days: '1 Oct',
    costs: '100 €',
  },
  {
    id: 3,
    name: 'Day Ticket',
    days: '2 Oct',
    costs: '100 €',
  },
  {
    id: 4,
    name: 'Day Ticket',
    days: '3 Oct',
    costs: '80 €',
  },
];

export default function Tickets() {
  return (
    <div className={styles.sectionBackground}>
      <div className={styles.sectionContainer}>
        <div>
          <h2>Conference Tickets</h2>
        </div>
        <div>
          <div className={styles.ticketGrid}>
            {tickets.map((ticket) => {
              return (
                <div key={`tickets-${ticket.id}`} className={styles.ticketCard}>
                  <div className={styles.ticketName}>{ticket.name}</div>
                  <div>{ticket.days}</div>
                  <div>{ticket.costs}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
