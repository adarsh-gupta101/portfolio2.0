import react from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div className="skills">
      <p>Html</p>
      <div className="containers">
        <div className="skill Html"></div>
      </div>
      <p>Css</p>
      <div className="containers">
        <div className="skill css"></div>
      </div>
      <p>Javascript</p>
      <div className="containers">
        <div className="skill Javascript"></div>
      </div>
      <p>React JS</p>
      <div className="containers">
        <div className="skill React"></div>
      </div>

      <p>Node JS</p>
      <div className="containers">
        <div className="skill Node"></div>
      </div>
      <p>Exress JS</p>
      <div className="containers">
        <div className="skill Express"></div>
      </div>
      <p> Mongo DB</p>
      <div className="containers">
        <div className="skill MongoDB"></div>
      </div>
    </div>
  );
};
export default Skills;
