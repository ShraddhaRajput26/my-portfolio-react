import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/images/about.png" alt="About Shraddha" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend Developer!</h3>
        <p>
          I’m a highly motivated B.Tech student specializing in Computer
          Science. Skilled in Java, C, and web development. I work on major and
          minor projects, always seeking to solve real-world problems
          creatively!
        </p>
        <a href="#portfolio" className="btn">
          View Portfolio
        </a>
      </div>
    </section>
  );
};

export default About;
