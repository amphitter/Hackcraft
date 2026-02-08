import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import './Front.css';
import Team from './Team';
import Timeline from './Timeline';
import Profile from './Profile';
import About from './About';
import Epic from './Epic';
import Location from './Location';
import img500 from '../images/500.png';
import img501 from '../images/501.png';
import img200 from '../images/200.png';
import img201 from '../images/201.png';
import img510 from '../images/2.png';


// ===== COUNTDOWN TIMER =====
function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <motion.div 
        className="countdown-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="time-label">DAYS</div>
      </motion.div>
      
      <motion.div 
        className="countdown-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="time-label">HOURS</div>
      </motion.div>
      
      <motion.div 
        className="countdown-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="time-label">MINUTES</div>
      </motion.div>
      
      <motion.div 
        className="countdown-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="time-label">SECONDS</div>
      </motion.div>
    </div>
  );
}

function Front() {
  return (
    <div className="front-wrapper">
      <div className="front-container">

        {/* Background Images */}
        <motion.div 
          className="bg-image-left"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.2 }}
        >
          <img src={img200} alt="Background Left" />
        </motion.div>

        <motion.div 
          className="bg-image-right"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.4 }}
        >
          <img src={img201} alt="Background Right" />
        </motion.div>

        {/* Main Content */}
        <div className="main-content">
          <motion.div 
            className="content-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.div 
              className="event-logo"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img src={img510} alt="Event Logo" className="main-logo-img" />
            </motion.div>
            
            <motion.div className="event-tagline">
              LEARN IT | CRACK IT | HACK IT!
            </motion.div>
            
            <motion.div className="event-date">
              28th-29th MARCH 2026
            </motion.div>
            <br></br>

            {/* Sponsors */}
            <motion.div className="sponsor-section">
              <div className="sponsor-column">
                <div className="sponsor-label">HOSTED BY</div>
                <div className="sponsor-logo">
                  <img src={img500} alt="Host Logo" />
                </div>
              </div>
              
              <div className="sponsor-divider"></div>
              
              <div className="sponsor-column">
                <div className="sponsor-label">CO-POWERED BY</div>
                <div className="sponsor-logo">
                  <img src={img501} alt="Co-Powered Logo" />
                </div>
              </div>
            </motion.div>

            <CountdownTimer targetDate="2026-03-28T00:00:00" />
          </motion.div>
        </div>

    <section id="profile">
  <Profile />
</section>

<section id="about">
  <About />
</section>

<section id="timeline">
  <Timeline />
</section>

<section id="epic">
  <Epic />
</section>
<section id="location">
  <Location />
</section>



      </div>
    </div>
  );
}

export default Front;
