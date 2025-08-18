import "./Hero.css"
import Navbar from "../Navbar/Navbar"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"
const Hero = () => {
    const toptext =useRef(null);
    const bottomtext = useRef(null);
    const heroButton= useRef(null);
    const heroSection = useRef(null);
    const floatingeffect = useRef(null);

    useLayoutEffect(() => {
    

    floatingeffect.current = gsap.fromTo(
    heroSection.current,
    { y: -30 },
    {
        y: 30,
        yoyo: true,      // reverse each loop
        repeat: -1,      // loop forever
        ease: "power1.inOut",
        duration: 2,      // how long one up/down cycle takes
    }
    );

    return () => {
        if (floatingeffect.current) {
            floatingeffect.current.kill();
        }}

    }, []); 

 
    const hovermethod = () => {

        floatingeffect.current.pause(); 
        
        gsap.to(toptext.current, {
            y: "-40px",
            duration: .5,
            ease: "power2.out"
        })
        gsap.to(bottomtext.current, {
            
            y: "40px",
            duration: .5,
            ease: "power2.out"
        });
        gsap.to(heroButton.current, {
            opacity: 1,
            duration: .2,
            ease: "power2.out"
        });

    }

    const handleMouseLeave = () => {

        floatingeffect.current.play();

        gsap.to(toptext.current, {
            y: "0px",
            duration: .5,
            ease: "power2.inOut"
        });
        gsap.to(bottomtext.current, {
            y: "0px",
            duration: .5,
            ease: "power2.inOut"
        });
        gsap.to(heroButton.current, {
            opacity: 0,
            duration: .2,
            ease: "power2.inOut"
        });
    };

    
  return (
    <div className="hero-container">
      <div className="hero-navbar">
        <Navbar />
      </div>

      <div className="hero-section" ref={heroSection} onMouseEnter={hovermethod} onMouseLeave={handleMouseLeave}>
        <div className="hero-top" ref={toptext}>
            <h1 className="hero-title" >Tele3 Semestre, Majori Promo</h1>
        </div>

        <a
            ref={heroButton}
          className="hero-btn"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdxNnJYfr7VHsAjexJq2yvWaoo30azdNey_j4KVwYos3IaeZw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
        ></a>

        <div className="hero-bottom" ref={bottomtext}>
            
        
            <h1 className="hero-title "  >Your Path to Academic Excellence!</h1>
            <p id="hero-paragraph">
          Vertex provides the resources, summarized courses, and past documents you need 
        </p>
        
        <span className="hero-note">
          Note: Our resources are entirely free, thanks to students like you. Your shared documents help future students
          succeed in their studies. Help out; it's a good deed.
        </span>
        </div>
        
        
      </div>
    </div>
  )
}

export default Hero
