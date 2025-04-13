import React from "react";

const projects = [
  {
    img: "/images/portfolio1.png",
    title: "Web Design",
    desc: "A DSA Tracker is a web-based tool designed to streamline DSA learning.",
    link: "#",
  },
  {
    img: "/images/portfolio2.avif",
    title: "Web Design",
    desc: "Let's Start.",
    link: "#",
  },
  {
    img: "/images/portfolio3.png",
    title: "Python Project",
    desc: "Typing Speed & Accuracy Tester for assessing typing proficiency.",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>
      <div className="portfolio-container">
        {projects.map(({ img, title, desc, link }, index) => (
          <div className="portfolio-box" key={index}>
            <img src={img} alt={title} />
            <div className="portfolio-layer">
              <h4>{title}</h4>
              <p>{desc}</p>
              <a href={link}>
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
