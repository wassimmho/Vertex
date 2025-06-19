import React from 'react';
import './Hero.css';
import Bulb from '../../assets/Vector.svg';
import dots from '../../assets/DotGrid.svg';
import linkedinIcon from '../../assets/linkdin.svg'; // Path to your linkedin.svg
import Instagram from '../../assets/instagram.svg'; // Path to your instagram.svg

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-section">
                <h1 id='hero-title'>Tele3 Semestre, Majori Promo:<br></br>Your Path to Academic Excellence!</h1>
                <p id='hero-paragraph'>Vertex provides the resources, summarized courses,
                    and past documents you need to confidently</p>
                <button className="hero-btn"></button>
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
                    <button id='form-button-hero'>Fill The Form</button>
                </div>
                <div className='classes-hero' id='box-hero-3'>
                    <h2 className='classes-hero-title-' id='Classes-title'>Classes</h2>
                </div>
                
            <img src={dots} alt="Dots" className="hero-dots" id='topdots' />
            <img src={dots} alt="Dots" className="hero-dots" id='bottomdots'/>
            <img src={Bulb} alt="Bulb" className="hero-bulb" />

            </div>
            
        </div>
    );
}

export default Hero;
