import React from 'react';
import './Epic.css';
import Team from './Team';
import img90 from '../images/215.png';

const Epic = () => {
  return (
    <div className="epic-container">
      <div className="content-wrapper">
        <div className="header-section">
          <h1 className="epic-title">
            <span className="title-normal">Epic</span>
            <span className="title-highlight"> Rewards</span>
          </h1>
          <p className="epic-subtitle">Compete for prizes, mentorship opportunities, and exclusive perks</p>
        </div>

        <div className="rewards-grid">
          {/* 1st Place */}
          <div className="reward-card card-gold">
            <div className="card-glow"></div>
            <div className="card-corner tl"></div>
            <div className="card-corner tr"></div>
            <div className="card-corner bl"></div>
            <div className="card-corner br"></div>
            
            <div className="icon-wrapper">
              <svg className="reward-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            
            <h2 className="place-title">1st Place</h2>
            
            <ul className="rewards-list">
              <li><span className="bullet"></span>Cash Prize</li>
              <li><span className="bullet"></span>Mentorship Program</li>
              <li><span className="bullet"></span>Funding Opportunities</li>
              <li><span className="bullet"></span>Premium Tech Package</li>
            </ul>
          </div>

          {/* 2nd Place */}
          <div className="reward-card card-silver">
            <div className="card-glow"></div>
            <div className="card-corner tl"></div>
            <div className="card-corner tr"></div>
            <div className="card-corner bl"></div>
            <div className="card-corner br"></div>
            
            <div className="icon-wrapper">
              <svg className="reward-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
            </div>
            
            <h2 className="place-title">2nd Place</h2>
            
            <ul className="rewards-list">
              <li><span className="bullet"></span>Cash Prize</li>
              <li><span className="bullet"></span>Mentorship Program</li>
              <li><span className="bullet"></span>Tech Package</li>
              <li><span className="bullet"></span>Networking Access</li>
            </ul>
          </div>

          {/* 3rd Place */}
          <div className="reward-card card-bronze">
            <div className="card-glow"></div>
            <div className="card-corner tl"></div>
            <div className="card-corner tr"></div>
            <div className="card-corner bl"></div>
            <div className="card-corner br"></div>
            
            <div className="icon-wrapper">
              <svg className="reward-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
                <path d="M11 12 5.12 2.2"></path>
                <path d="m13 12 5.88-9.8"></path>
                <path d="M8 7h8"></path>
                <circle cx="12" cy="17" r="5"></circle>
                <path d="M12 18v-2h-.5"></path>
              </svg>
            </div>
            
            <h2 className="place-title">3rd Place</h2>
            
            <ul className="rewards-list">
              <li><span className="bullet"></span>Cash Prize</li>
              <li><span className="bullet"></span>Tech Package</li>
              <li><span className="bullet"></span>Networking Access</li>
              <li><span className="bullet"></span>Certificate</li>
            </ul>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="sponsors-section">
          <div className="sponsors-header">
            <div className="header-line"></div>
            <h2 className="sponsors-title">
              <span className="lock-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                  <path d="M12 17v-3"></path>
                  <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
                </svg>
              </span>
              Secured By
            </h2>
            <div className="header-line"></div>
          </div>

          <div className="sponsors-grid">
            <div className="sponsor-card">
              <div className="sponsor-border"></div>
              <div className="sponsor-content">
                <div className="sponsor-image-wrapper">
                  {/* Replace with actual sponsor logo */}
                  <img src={img90} alt="Sponsor 1" className="sponsor-image" />
                </div>
              </div>
              <div className="scan-line"></div>
            </div>

            <div className="sponsor-card">
              <div className="sponsor-border"></div>
              <div className="sponsor-content">
                <div className="sponsor-image-wrapper">
                  {/* Replace with actual sponsor logo */}
                  <img src="sponsor-logo-2.png" alt="Sponsor 2" className="sponsor-image" />
                </div>
              </div>
              <div className="scan-line"></div>
            </div>

            <div className="sponsor-card">
              <div className="sponsor-border"></div>
              <div className="sponsor-content">
                <div className="sponsor-image-wrapper">
                  {/* Replace with actual sponsor logo */}
                  <img src="sponsor-logo-3.png" alt="Sponsor 3" className="sponsor-image" />
                </div>
              </div>
              <div className="scan-line"></div>
            </div>
          </div>
        </div>
        <Team />
      </div>
      
    </div>
    
  );
};

export default Epic;