import React from 'react';
import './Hero.css';
import Bulb from '../../assets/Vector.svg';
import dots from '../../assets/DotGrid.svg';
import linkedinIcon from '../../assets/linkdin.svg'; // Path to your linkedin.svg
import Instagram from '../../assets/Instagram.svg'; // Path to your instagram.svg

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-section">
                <h1 id='hero-title'>Tele3 Semestre, Majori Promo:<br />Your Path to Academic Excellence!</h1>
                <p id='hero-paragraph'>Vertex provides the resources, summarized courses,
                    and past documents you need to confidently</p>
                <a
                    className="hero-btn"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdxNnJYfr7VHsAjexJq2yvWaoo30azdNey_j4KVwYos3IaeZw/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    
                </a>
                <span className="hero-note">Note: Our resources are entirely free, thanks to students like you. Your shared documents help future students succeed in their studies. Help out; it's a good deed.</span>
            </div>
            <div className="hero-media">
                <div className='classes-hero' id='box-hero-1'>
                    <h2 className='classes-hero-title-'>Contact Us</h2>
                    <div className='classes-hero-icon'>
                        <a href="https://www.linkedin.com/in/wassim-mouhouche-773559318/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon-hero" />
                        </a>
                        <a href="https://www.instagram.com/wassimmho/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" className="instagram-icon-hero" />
                        </a>
                    </div>
                </div>
                <div className='classes-hero' id='box-hero-2'>
                    <h2 className='classes-hero-title-'>Help Us Improve</h2>
                    <a
                        id='form-button-hero'
                        href='https://docs.google.com/forms/d/e/1FAIpQLScGmv8AL-D_tBxlZz3WXAM36VrYQoe6crD2gBGCOovgLCNuCw/viewform?usp=dialog'
                        target='_blank'
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        Fill the Form
                    </a>
                </div>
                <div className='classes-hero' id='box-hero-3'>
                    <h3 className='classes-hero-title-' id='Classes-title'>By Students, For Students.</h3>
                </div>

                <img src={dots} alt="Dots" className="hero-dots" id='topdots' />
                <img src={dots} alt="Dots" className="hero-dots" id='bottomdots' />
                <img src={Bulb} alt="Bulb" className="hero-bulb" />

            </div>

        </div>
    );
}

export default Hero;
