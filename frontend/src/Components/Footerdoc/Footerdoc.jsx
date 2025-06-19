import React from 'react';
import './Footerdoc.css';
import githubIcon from '../../assets/GithubWhite.svg'; // Path to your github.svg
import linkedinIcon from '../../assets/linkedinWhite.svg'; // Path to your linkedin.svg

const Footerhome = () => {
  return (
    <div className="footer-doc-container">
      <footer className="footer-doc">
        <div className="footer-text-doc">
          Crafted for students by the Vertex Team ⭐
        </div>
        <div className="social-icons-doc">
          <a href="https://github.com/wassimmho" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="github-icon-doc" />
          </a>
          <a href="https://www.linkedin.com/in/wassim-mouhouche-773559318/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon-doc" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footerhome;
