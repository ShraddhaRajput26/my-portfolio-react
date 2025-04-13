import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BxMenu } from "react-icons/bx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <a href="#home" className="logo">
        Portfolio
      </a>
      <div
        className={`menu-icon ${menuOpen ? "bx-x" : "bx"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <BxMenu />
      </div>
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link to="home" smooth duration={500} className="active">
          Home
        </Link>
        <Link to="about" smooth duration={500}>
          About
        </Link>
        <Link to="skills" smooth duration={500}>
          Skill
        </Link>
        <Link to="portfolio" smooth duration={500}>
          Portfolio
        </Link>
        <Link to="contact" smooth duration={500}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
