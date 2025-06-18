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
                        <button id="contribute-nav">Contribute</button>
                </div>
                <a href="#" id="githubnav"> <img src={githublogo} alt="logo github"  /></a>
            </div>

        </div>
    </nav>
    </>
)

}

export default Navbar;