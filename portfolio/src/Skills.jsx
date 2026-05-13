import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaChartBar
} from "react-icons/fa";

function Skills() {
  return (
    <div className="skills-grid">

      <div className="skill-card">
        <div className="skill-icon">
          <FaHtml5 />
        </div>
        <div className="skill-name">HTML</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <FaCss3Alt />
        </div>
        <div className="skill-name">CSS</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <FaJs />
        </div>
        <div className="skill-name">JavaScript</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <FaReact />
        </div>
        <div className="skill-name">React</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <FaPython />
        </div>
        <div className="skill-name">Python</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <FaDatabase />
        </div>
        <div className="skill-name">SQL</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <FaChartBar />
        </div>
        <div className="skill-name">Power BI</div>
      </div>

    </div>
  );
}

export default Skills;