import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: {
    default: 'Home page | Real Estate company',
    template: '%s | Real Estate',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <nav>
              <Link href="/" className="navText">
                Overview
              </Link>

              <Link href="/agenda" className="navText">
                Agenda
              </Link>

              <Link href="/contact" className="navText">
                Contact
              </Link>
              <Link href="/registration" className="navText">
                Registration
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
