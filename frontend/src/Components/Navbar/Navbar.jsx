import "./Navbar.css";
import githublogo from "../../assets/github.svg";
import Logo from "../../assets/vertex.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
const location = useLocation();
const pathcheck =(path)=> location.pathname === path;
return (
    <>
    <nav>
        <div className="navbar-container">

            <img src={Logo} alt="" id="mainlogo" />

            <ul className="nav-links">
                <li className={["/home","/"].includes(location.pathname)? "active":""}><Link to="/home">Home</Link></li>
                <li className={pathcheck("/study")? "active":""}><Link to="/study">Study Resources</Link></li>
            </ul>

            <div className="nav-buttons">
                <div id="buttoncon">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdxNnJYfr7VHsAjexJq2yvWaoo30azdNey_j4KVwYos3IaeZw/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button id="contribute-nav">Contribute</button>
                    </a>
                </div>
                <a href="https://github.com/wassimmho" target="_blanc" id="githubnav"> <img src={githublogo} alt="logo github"  /></a>
            </div>

        </div>
    </nav>
    </>
)

}

export default Navbar;