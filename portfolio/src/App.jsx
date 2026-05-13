import "./App.css";
import { useEffect } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaChartBar,
  FaLaptopCode,
  FaSearch,
  FaCar,
  FaTrophy
} from "react-icons/fa";

function App() {
  const openMobileMenu = () => {
  document.getElementById("mobileMenu").classList.add("open");
};

const closeMobileMenu = () => {
  document.getElementById("mobileMenu").classList.remove("open");
};
useEffect(() => {

  const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }

      });
    },
    {
      threshold: 0.1
    }
  );

  reveals.forEach((el) => observer.observe(el));

  return () => observer.disconnect();

}, []);
  return (
    <>
      {/* MOBILE MENU */}
      <div className="mobile-menu" id="mobileMenu">
        <button className="mobile-close" onClick={closeMobileMenu}>✕</button>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-logo">V.</div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="hamburger" onClick={openMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>
        <div className="hero-orb orb3"></div>

        <div className="hero-grid-bg"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero-name">
            <span className="name-gradient">Vandana</span>
          </h1>

          <div className="hero-title">
            Full Stack Developer
          </div>

          <p className="hero-desc">
            Crafting elegant digital experiences at the intersection of design and data.
            Building the future, one line of code at a time.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn-ghost">
              Get In Touch
            </a>
          </div>
          
        </div>
        <div className="scroll-indicator">
  <div className="scroll-line"></div>
  <span>SCROLL</span>
</div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-inner">
          <div className="about-grid">

            <div className="about-visual reveal-left">
              <div className="float-chip c1">
  <div
    className="chip-dot"
    style={{
      background: "var(--cyan)",
      boxShadow: "0 0 6px var(--cyan)"
    }}
  ></div>

  Developer
</div>

<div className="float-chip c2">
  <div
    className="chip-dot"
    style={{
      background: "var(--purple)",
      boxShadow: "0 0 6px var(--purple)"
    }}
  ></div>

  Designer
</div>
              <div className="avatar-frame">
                <div className="avatar-glow"></div>
                <div className="avatar-inner">
  <div
    style={{
      fontSize: "5rem",
      zIndex: 1,
      position: "relative"
    }}
  >
    👩‍💻
  </div>
</div>
              </div>
            </div>

            <div className="about-text reveal-right">
              <div className="section-label">WHO I AM</div>

              <h2 className="section-title">
                Designing <span className="gradient-text">solutions</span> that matter
              </h2>

              <p>
                Hi, I'm Vandana — a passionate full-stack developer and data enthusiast.
              </p>

              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Projects Shipped</div>
                </div>

                <div className="stat-card">
                  <div className="stat-number">7</div>
                  <div className="stat-label">Technologies</div>
                </div>

                <div className="stat-card">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Passion Driven</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-inner">

          <div className="reveal">
            <div className="section-label">WHAT I KNOW</div>

            <h2 className="section-title">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
          </div>

          <div className="skills-grid">

            <div className="skill-card reveal">
              <div className="skill-icon">
                <FaHtml5 />
              </div>

              <div className="skill-name">HTML</div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <FaCss3Alt />
              </div>

              <div className="skill-name">CSS</div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <FaJs />
              </div>

              <div className="skill-name">JavaScript</div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <FaReact />
              </div>

              <div className="skill-name">React JS</div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <FaPython />
              </div>

              <div className="skill-name">Python</div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <FaDatabase />
              </div>

              <div className="skill-name">SQL</div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <FaChartBar />
              </div>

              <div className="skill-name">Power BI</div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-inner">

          <div className="section-label">WHAT I'VE BUILT</div>

          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="projects-grid">

            <div className="project-card">
              <div className="project-header">

                <div className="project-icon">
                  <FaLaptopCode />
                </div>

                <div className="project-title">Sklassics Clone</div>

                <div className="project-desc">
                  Responsive clone website inspired by the Sklassics platform.
                </div>
                <div className="project-tags">
  <span className="tag">HTML</span>
  <span className="tag">CSS</span>
  <span className="tag">Responsive</span>
</div>

<div className="project-footer">

  <a
    href="https://your-live-project-link.com"
    target="_blank"
    rel="noreferrer"
    className="btn-sm filled"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/your-github-link"
    target="_blank"
    rel="noreferrer"
    className="btn-sm outline"
  >
    Source Code
  </a>

</div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">

                <div className="project-icon">
                  <FaSearch />
                </div>

                <div className="project-title">EasyFindHostels Clone</div>

                <div className="project-desc">
                  Hostel booking website clone built using HTML and CSS.
                </div>
                <div className="project-tags">
  <span className="tag">HTML</span>
  <span className="tag">CSS</span>
  <span className="tag">Responsive</span>
</div>

<div className="project-footer">

  <a
    href="https://your-live-project-link.com"
    target="_blank"
    rel="noreferrer"
    className="btn-sm filled"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/your-github-link"
    target="_blank"
    rel="noreferrer"
    className="btn-sm outline"
  >
    Source Code
  </a>

</div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">

                <div className="project-icon">
                  <FaCar />
                </div>

                <div className="project-title">Portfolio Website</div>

                <div className="project-desc">
                  Premium animated developer portfolio website.
                </div>
                <div className="project-tags">
  <span className="tag">HTML</span>
  <span className="tag">CSS</span>
  <span className="tag">Responsive</span>
</div>

<div className="project-footer">

  <a
    href="https://your-live-project-link.com"
    target="_blank"
    rel="noreferrer"
    className="btn-sm filled"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/your-github-link"
    target="_blank"
    rel="noreferrer"
    className="btn-sm outline"
  >
    Source Code
  </a>

</div>
              </div>
              
            </div>

          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ACHIEVEMENTS */}
<section id="achievements">
  <div className="section-inner">

    <div className="section-label">MILESTONES</div>

    <h2 className="section-title">
      Achievements & <span className="gradient-text">Certificates</span>
    </h2>

    <div className="achievements-grid">

      <div className="achievement-card">
        <div
          className="achievement-icon"
          style={{
            background:
              "linear-gradient(135deg,rgba(34,211,238,0.2),rgba(79,142,247,0.2))"
          }}
        >
          <FaTrophy />
        </div>

        <div className="achievement-content">
          <h4>Full Stack Web Development</h4>
          <p>Completed an intensive full stack program.</p>
          <div className="achievement-year">2024</div>
        </div>
      </div>

      <div className="achievement-card">
        <div
          className="achievement-icon"
          style={{
            background:
              "linear-gradient(135deg,rgba(139,92,246,0.2),rgba(236,72,153,0.2))"
          }}
        >
          <FaChartBar />
        </div>

        <div className="achievement-content">
          <h4>Power BI Data Analytics</h4>
          <p>Certified in business intelligence dashboards.</p>
          <div className="achievement-year">2024</div>
        </div>
      </div>

    </div>
  </div>
</section>

<div className="divider"></div>
      {/* CONTACT */}
      <section id="contact">
        <div className="section-inner">

          <div className="section-label">SAY HELLO</div>

          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>

          <div className="contact-grid">

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-item-icon">📧</div>

                <div className="contact-item-text">
                  <h4>EMAIL</h4>
                  <p>vandanavysyaraju@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <input
                type="text"
                className="form-input"
                placeholder="Your full name"
              />

              <input
                type="email"
                className="form-input"
                placeholder="your@email.com"
              />

              <textarea
                className="form-input"
                placeholder="Tell me about your project..."
              ></textarea>

              <button className="btn-primary">
                Send Message
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-logo">Vandana.</div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-copy">
            Crafted with ♥ by Vandana · © 2025
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
