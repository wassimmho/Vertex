import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footerhome from "../../Components/Footerhome/Footerhome";
import Contributesection from "../../Components/Contributesection/Contributesection";
import About from "../../Components/About/About";

function Home() {

    return (
        
        <>
        <nav id="navbar-home">
        <Navbar/>
        </nav>
        <Hero/>
        <About/>
        <Contributesection/>
        <Footerhome/>
        </>
    )
    
    }
    
    export default Home;