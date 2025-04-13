import React, { useEffect } from "react";
import Typed from "typed.js";
import {
  BxlLinkedin,
  BxlGithub,
  BxlWhatsapp,
  BxlMicrosoft,
} from "react-icons/bx";

const Home = () => {
  useEffect(() => {
    new Typed(".multiple-text", {
      strings: ["Frontend Developer", "Web-Designer", "Student"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello 👋🏻 , It's Me</h3>
        <h1>Rajput Shraddha</h1>
        <h3>
          And I'm a <span className="multiple-text"></span>
        </h3>
        <p>
          I'm a Btech Student Passionate about Computer Science Engineering.
          Expertise in website design, frontend design, and more.
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/shraddha-rajput-730698290/">
            <BxlLinkedin />
          </a>
          <a href="https://github.com/ShraddhaRajput26">
            <BxlGithub />
          </a>
          <a href="#">
            <BxlWhatsapp />
          </a>
          <a href="https://learn.microsoft.com/en-us/users/shraddharajput-6284/">
            <BxlMicrosoft />
          </a>
        </div>
        <a href="#about" className="btn">
          More About Me
        </a>
      </div>

      <div className="home-img">
        <img src="/images/home.png" alt="Shraddha Rajput" />
      </div>
    </section>
  );
};

export default Home;
