import React, { useState } from "react";
import "./Navbar.css";

import gitmLogo from "../images/GITM_Logo.jpg";
import sankalpLogo from "../images/TeamSankalp.png";
import alacticLogo from "../images/Alactic.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      setMenuOpen(false); // close menu on click
    }
  };

  return (
    <>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar-desktop">


        {/* ===== LEFT LOGOS ===== */}
        <div
          className="nav-logos"
          onClick={() => scrollToSection("home")}
        >

          <img src={gitmLogo} alt="GITM" className="nav-logo gitm-logo" />

          <span className="logo-divider" />

          <img src={sankalpLogo} alt="Team Sankalp" className="nav-logo sankalp-logo" />

          <span className="logo-divider" />

          <img src={alacticLogo} alt="Alactic" className="nav-logo alactic-logo" />

        </div>


        {/* ===== CENTER LINKS (DESKTOP) ===== */}
        <div className="nav-links desktop-links">

          <span onClick={() => scrollToSection("home")} className="nav-link">Home</span>

          <span onClick={() => scrollToSection("about")} className="nav-link">About</span>

          <span onClick={() => scrollToSection("timeline")} className="nav-link">Timeline</span>

          <span onClick={() => scrollToSection("team")} className="nav-link">Team</span>

          <span onClick={() => scrollToSection("profile")} className="nav-link">Themes</span>

        </div>


        {/* ===== RIGHT AREA ===== */}
        <div className="nav-right">

          <button className="sign-in-btn desktop-btn">
            Coming Soon
          </button>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>


      </nav>



      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <span onClick={() => scrollToSection("home")}>Home</span>

        <span onClick={() => scrollToSection("about")}>About</span>

        <span onClick={() => scrollToSection("timeline")}>Timeline</span>

        <span onClick={() => scrollToSection("team")}>Team</span>

        <span onClick={() => scrollToSection("profile")}>Themes</span>

        <button className="sign-in-btn mobile-btn">
          Coming Soon
        </button>

      </div>

    </>
  );
}

export default Navbar;
