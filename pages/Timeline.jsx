import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';
import Epic from './Epic';


const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const scheduleData = [
    {
      id: 1,
      time: '7 FEB, 2026',
      title: 'REGISTRATION & PPT SUBMISSION STARTS',
      description: 'Participant check-in and credential verification and PPT submission starts',
      status: 'START'
    },
    {
      id: 2,
      time: '7 MARCH, 2026',
      title: 'REGISTRATION DEADLINE',
      description: 'Last date to register for the event. No entries accepted after this.',
      status: 'ACTIVE'
    },
    {
      id: 3,
      time: '12 MARCH, 2026',
      title: 'DEADLINE PPT SUBMISSION',
      description: 'Final deadline to submit your presentation for evaluation.',
      status: 'ACTIVE'
    },
    {
      id: 4,
      time: '13 MARCH, 2026-15 MARCH, 2026',
      title: 'ONLINE PRESENTATION ROUND',
      description: 'TTeams will present their ideas online in front of the judging panel.',
      status: 'ACTIVE'
    },
    {
      id: 5,
      time: '17 MARCH, 2026',
      title: 'SHORTLISTED TEAM ANNOUNCEMENT',
      description: 'Selected teams will be announced for the next round/finale.',
      status: 'BREAK'
    },
    {
      id: 6,
      time: '28–29 MARCH, 2026',
      title: 'FINAL EVENT',
      description: 'Final round, presentations, and winner announcement.',
      status: 'ACTIVE'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.dataset.id);
            setVisibleItems((prev) => {
              if (!prev.includes(itemId)) {
                return [...prev, itemId];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline-scanline"></div>
      <div className="timeline-grid-bg"></div>

      {/* Header */}
      <div className="timeline-header">
        <div className="timeline-header-line"></div>
        <h2 className="timeline-title">
          <span className="timeline-glitch" data-text="24-HOUR HACKATHON">
            TIMELINE
          </span>
        </h2>
        <p className="timeline-subtitle">SCHEDULE SEQUENCE</p>
      </div>

      {/* Timeline */}
      <div className="timeline-wrapper" ref={timelineRef}>
        <div className="timeline-line">
          <div className="timeline-line-glow"></div>
        </div>

        <div className="timeline-events">
          {scheduleData.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`timeline-item ${
                visibleItems.includes(item.id) ? 'visible' : ''
              } ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              {/* Time Marker */}
              <div className="timeline-marker">
                <div className="marker-outer">
                  <div className="marker-inner">
                    <div className="marker-pulse"></div>
                  </div>
                </div>
                <div className="marker-line"></div>
              </div>

              {/* Content Card */}
              <div className="timeline-card">
                <div className="card-corners">
                  <span className="corner corner-tl"></span>
                  <span className="corner corner-tr"></span>
                  <span className="corner corner-bl"></span>
                  <span className="corner corner-br"></span>
                </div>

                <div className="card-glow-effect"></div>

                <div className="timeline-time">
                  <span className="time-bracket">[</span>
                  <span className="time-value">{item.time}</span>
                  <span className="time-bracket">]</span>
                </div>

                <div className="timeline-status-badge" data-status={item.status}>
                  {item.status}
                </div>

                <h3 className="timeline-event-title">{item.title}</h3>
                <p className="timeline-event-desc">{item.description}</p>

                <div className="card-data-stream">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="timeline-connector">
                <div className="connector-dot"></div>
              </div>
            </div>
          ))}
        </div>

        {/* End Marker */}
        <div className="timeline-end-marker">
          <div className="end-marker-circle">
            <div className="end-marker-inner"></div>
          </div>
          <div className="end-marker-text">SEQUENCE COMPLETE</div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="timeline-particles">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="timeline-particle" style={{ animationDelay: `${i * 0.3}s` }}></span>
        ))}
      </div>
          <Epic />

    </div>
  );
};

export default Timeline;