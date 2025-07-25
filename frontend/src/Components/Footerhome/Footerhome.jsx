import React from 'react';
import './Footerhome.css';
import githubIcon from '../../assets/github.svg'; // Path to your github.svg
import linkedinIcon from '../../assets/linkdin.svg'; // Path to your linkedin.svg

const Footerhome = () => {
  return (
    <footer className="footer-home">
      <div className="footer-text-home">
      Crafted for students by the Vertex Team ⭐
      </div>
      <div className="social-icons">
        <a href="https://github.com/wassimmho" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/wassim-mouhouche-773559318/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footerhome;
