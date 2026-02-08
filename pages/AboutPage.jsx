import React from "react";
import "./AboutPage.css";

import logo from "../images/hackcraft-logo.png"; // 👉 Add your logo here

// Glimpse images (use any event photos)
import g1 from "../images/151.jpg";
import g2 from "../images/153.jpeg";
import g3 from "../images/154.jpeg";
import g4 from "../images/155.jpg";

const AboutPage = () => {
  return (
    <section className="aboutpage-section">

      {/* Background */}
      <div className="cyber-grid"></div>

      <div className="aboutpage-container">

        {/* ================= HERO ================= */}
        <div className="aboutpage-hero">

          {/* Left */}
          <div className="aboutpage-left">
            <img src={logo} alt="HackCraft Logo" className="aboutpage-logo" />

            <h1>HACKCRAFT 3.0</h1>
            <p className="tagline">
              Organized by <span>Team Sankalp</span>
            </p>

            <p className="college">
              Global Institute of Technology and Management
            </p>
          </div>

          {/* Right */}
          <div className="aboutpage-right">

            <h2>About HackCraft</h2>

            <p>
              HackCraft is the flagship annual hackathon organized and hosted by
              Global Institute of Technology and Management (GITM). The event is
              completely sponsored and supported by the college administration.
            </p>

            <p>
              Since its inception in 2024, HackCraft has successfully conducted
              editions in 2024 and 2025, empowering young innovators and
              nurturing problem-solving skills.
            </p>

            <p>
              This hackathon focuses on developing creative thinking,
              collaboration, and real-world solution building among students.
              Participants work intensively for 24 hours to transform ideas
              into impactful projects.
            </p>

            <p>
              Team Sankalp, the legacy technical club of the institution, serves
              as the core coordination team. They manage planning, execution,
              collaborations, and overall operations of the event.
            </p>

          </div>

        </div>


        {/* ================= GLIMPSES ================= */}
        <div className="aboutpage-glimpses">

          <h2>Event Glimpses</h2>

          <div className="glimpse-grid">

            <img src={g1} alt="event" />
            <img src={g2} alt="event" />
            <img src={g3} alt="event" />
            <img src={g4} alt="event" />

          </div>

        </div>



        {/* ================= CONTACT ================= */}
        <div className="aboutpage-contact">

          <h2>Contact the Organisers</h2>

          <div className="contact-grid">

            {/* Devansh */}
            <div className="contact-card">

              <h3>Devansh Singh</h3>
              <p>Organizer</p>

              <span>📞 870971745</span>
              <span>📧 devanshsinghr@gmail.com</span>

            </div>

            {/* Kunal */}
            <div className="contact-card">

              <h3>Kunal</h3>
              <p>Organizer</p>

              <span>📧 globalhackcraft@gitmgurugram.com</span>
              <span>🔗 linkedin.com/in/kunal-biserwal-b2a70528a</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutPage;
