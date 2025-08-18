import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Contributesection from "../../Components/Contributesection/Contributesection";
import About from "../../Components/About/About";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const contributeRef = useRef(null);

    useLayoutEffect(() => {
        const sections = [heroRef.current, aboutRef.current, contributeRef.current];
        
        // Clear any existing ScrollTriggers to avoid conflicts
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        
        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                scrub: 1,
                // Add markers during development to visualize triggers
                //markers: true,
                // Only pin until the next section starts
               
            });
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (        
        <>
            <div ref={heroRef}>            
                <Hero/>
            </div>
            <div ref={aboutRef}>
                <About/>
            </div>
            <div ref={contributeRef}>
                <Contributesection/>
            </div>
        </>
    );
}

export default Home;