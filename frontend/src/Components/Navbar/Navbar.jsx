import "./Navbar.css";
import githublogo from "../../assets/github.svg";
import Logo from "../../assets/vertex.svg";

function Navbar() {

return (
    <>
    <nav>
        <div className="navbar-container">

            <img src={Logo} alt="" id="mainlogo" />

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Study Resources</a></li>
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