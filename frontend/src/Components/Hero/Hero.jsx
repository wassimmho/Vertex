import React from 'react';
import './Hero.css';
import Bulb from '../../assets/Vector.svg';
import dots from '../../assets/DotGrid.svg';
const Hero = () => {
return (
    <div className="hero-container">
        <div className="hero-section">
            <h1 id='hero-title'>Tele3 Semestre, Majori Promo:<br></br>Your Path to Academic Excellence!</h1>
            <p>Vertex provides the resources, summarized courses,
                and past documents you need to confidently</p>
            <button className="hero-btn">Contribute</button>
            <span className="hero-note">Note: Our resources are entirely free, thanks to students like you. Your shared documents help future students succeed in their studies. Help out; it's a good deed.</span>
        </div>
        <div className="hero-media">
            <div></div>
            <div></div>
            <div></div>
            
        <img src={Bulb} alt="Bulb" className="hero-bulb" />
        <img src={dots} alt="Dots" className="hero-dots" id='topdots' />
        <img src={dots} alt="Dots" className="hero-dots" id='bottomdots'/>

        </div>
        
    </div>
);
}

export default Hero;
