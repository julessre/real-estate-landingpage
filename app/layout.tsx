import './global.scss';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Home page | Real Estate company',
  description: 'Event landing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <nav>
              <Link href="/">Overview</Link>
              <Link href="/agenda">Agenda</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/tickets" className="navButton">
                Tickets
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="textFooter">European Real Estate Company</div>
          <div>
            <span className="textFooter">Contact: </span> erec@erec.com
          </div>
          <div>
            <span className="textFooter">Address:</span> Building Street 123,
            4567 Vienna
          </div>
        </footer>
      </body>
    </html>
  );
}
