import React from "react";
import { BxUpArrowAlt } from "react-icons/bx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        Copyright &copy; 2025 by Shra | All Rights Reserved.
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <BxUpArrowAlt />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
