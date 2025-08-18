
import "./About.css"
import gsap from "gsap";
import { useRef,useLayoutEffect } from "react";
function About() {
  const box = useRef(null);
  const Vspan = useRef(null);



    return (
  <>
  <div className="about-container">
        <h1 id="About-title">Driven by Student Needs</h1>
        <p id="about-paragraph" ><span id="bold-vertex-about">Vertex</span> began with a clear goal: to simplify the academic 
            path for <span id="text-span-about">every USTHB student</span> across all levels and specialties. 
            Recognizing the wasted time spent searching for reliable past papers,
             organized courses, and helpful exercises, we created Vertex as a centralized 
             resource. What started with Computer Science students is now expanding, aiming 
             to provide all necessary materials to ease your studies, help you pass with good 
             marks, and free up time for real-life skill development.</p>

  </div>
  
  </>
    );
}

export default About;