import './header.scss';
import React from 'react';

export default function Header() {
  return (
    <div>
      <img src="/header.png" alt="event header" className="headerImage" />
      <div className="sectionBackground">
        <div className="sectionContainer">
          <div className="sectionHeader">
            <h2>
              The European Real Estate Conference 2024 is where industry
              leaders, experts, and innovators converge to explore the latest
              trends, share insights, and shape the future of real estate in
              Europe.
            </h2>
          </div>
          <div>
            Discover cutting-edge technologies, gain actionable strategies, and
            network with top professionals from across the continent. Whether
            you're a seasoned veteran or a rising star in the industry, this
            conference offers unparalleled opportunities for learning,
            collaboration, and growth. Don't miss your chance to be part of this
            transformative event. Reserve your spot today and join us as we
            unlock the potential of European real estate together!
          </div>
          <div>
            Register now to secure your place at the forefront of innovation and
            sustainability in European real estate.
            <div>
              <button>Get your Tickets now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
