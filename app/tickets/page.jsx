'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from './page.module.scss';

const tickets = [
  {
    id: 1,
    name: 'Full Conference',
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const router = useRouter();

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
                  <div className={styles.ticketCosts}>{ticket.costs}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.form}>
            <h2 className={styles.headline}>Contact Information</h2>
            <div className={styles.smallContainer}>
              <div>
                <label aria-label="First Name">
                  <input
                    required
                    name="firstName"
                    data-test-id="checkout-first-name"
                    placeholder="First name*"
                    value={firstName}
                    className={styles.inputField}
                    onChange={(event) =>
                      setFirstName(event.currentTarget.value)
                    }
                  />
                </label>
              </div>
              <div>
                <label aria-label="Last Name">
                  <input
                    required
                    name="lastName"
                    data-test-id="checkout-last-name"
                    placeholder="Last name*"
                    value={lastName}
                    className={styles.inputField}
                    onChange={(event) => setLastName(event.currentTarget.value)}
                  />
                </label>
              </div>
            </div>
            <div>
              <label aria-label="email">
                <input
                  required
                  name="email"
                  data-test-id="checkout-email"
                  placeholder="your@email.com*"
                  value={email}
                  className={styles.inputField}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
              </label>
            </div>
            <div>
              <h2 className={styles.headline}>Shipping Information</h2>
              <div>
                <label aria-label="Address">
                  <input
                    required
                    name="address"
                    data-test-id="checkout-address"
                    placeholder="Address*"
                    value={address}
                    className={styles.inputField}
                    onChange={(event) => setAddress(event.currentTarget.value)}
                  />
                </label>
              </div>
              <div className={styles.smallContainer}>
                <div>
                  <label aria-label="City">
                    <input
                      required
                      name="city"
                      data-test-id="checkout-city"
                      placeholder="City*"
                      value={city}
                      className={styles.inputField}
                      onChange={(event) => setCity(event.currentTarget.value)}
                    />
                  </label>
                </div>
                <div>
                  <label aria-label="Postal Code">
                    <input
                      required
                      name="postalCode"
                      data-test-id="checkout-postal-code"
                      placeholder="Postal Code*"
                      value={postalCode}
                      className={styles.inputField}
                      onChange={(event) =>
                        setPostalCode(event.currentTarget.value)
                      }
                    />
                  </label>
                </div>
              </div>
              <div>
                <label aria-label="Country">
                  <input
                    required
                    name="country"
                    data-test-id="checkout-country"
                    placeholder="Country*"
                    value={country}
                    className={styles.inputField}
                    onChange={(event) => setCountry(event.currentTarget.value)}
                  />
                </label>
              </div>
            </div>
            <div>
              <h2 className={styles.headline}>Payment Information</h2>
              <div>
                <label aria-label="Credit Card Number">
                  <input
                    required
                    name="creditCard"
                    data-test-id="checkout-credit-card"
                    placeholder="Credit Card Number*"
                    value={creditCard}
                    className={styles.inputField}
                    onChange={(event) =>
                      setCreditCard(event.currentTarget.value)
                    }
                  />
                </label>
              </div>
              <div className={styles.smallContainer}>
                <div>
                  <label aria-label="Expiration Date">
                    <input
                      required
                      name="expirationDate"
                      data-test-id="checkout-expiration-date"
                      placeholder="MM / YY*"
                      value={expirationDate}
                      className={styles.inputField}
                      onChange={(event) =>
                        setExpirationDate(event.currentTarget.value)
                      }
                    />
                  </label>
                </div>
                <div>
                  <label aria-label="Security Code">
                    <input
                      required
                      name="securityCode"
                      data-test-id="checkout-security-code"
                      placeholder="CVC*"
                      value={securityCode}
                      className={styles.inputField}
                      onChange={(event) =>
                        setSecurityCode(event.currentTarget.value)
                      }
                    />
                  </label>
                </div>
              </div>
              <div className={styles.text}>
                * All input fields are required!
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button
                onClick={() => {
                  router.refresh();
                }}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
