import React from "react";

const Skills = () => {
  return (
    <section className="section10" id="skills">
      <div className="container1">
        <h1 className="heading1">Technical Skills</h1>
        <div className="Technical-bars">
          {[
            { label: "HTML", className: "html", percentage: "90%" },
            { label: "CSS", className: "css", percentage: "80%" },
            { label: "Javascript", className: "Javascript", percentage: "85%" },
            { label: "Python", className: "python", percentage: "90%" },
            { label: "React", className: "react", percentage: "90%" },
          ].map(({ label, className, percentage }) => (
            <div className="bar" key={label}>
              <div className="info">
                <span>{label}</span>
              </div>
              <div className={`progress-line ${className}`}>
                <span style={{ width: percentage }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container1">
        <h1 className="heading1">Professional Skills</h1>
        <div className="circles">
          {[
            { text: "Adaptability", percent: "90%" },
            { text: "Communication", percent: "75%" },
            { text: "Problem Solving", percent: "70%" },
            { text: "Teamwork", percent: "80%" },
            { text: "Leadership", percent: "80%" },
          ].map(({ text, percent }) => (
            <div className="radial-bars" key={text}>
              <svg viewBox="0 0 200 200">
                <circle
                  className="progress-bar"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className="path path-1"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className="percentage">{percent}</div>
              <div className="text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
