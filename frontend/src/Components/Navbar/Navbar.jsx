import "./Navbar.css";
import Logo from "../../assets/vertex.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const pathcheck = (path) => location.pathname === path;

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
                <div className="navbar-container">
                    <img src={Logo} alt="" id="mainlogo" />

                    <ul className="nav-links">
                        <li className={["/home", "/"].includes(location.pathname) ? "active" : ""}>
                            <Link to="/home">Home</Link>
                        </li>
                        <li className={pathcheck("/study") ? "active" : ""}>
                            <Link to="/study">Study Resources</Link>
                        </li>
                        <li className={pathcheck("/Questions") ? "active" : ""}>
                            <Link to="/Questions">Questions</Link>
                        </li>
                        <li className={pathcheck("/new-feature") ? "active" : ""}>
                            <Link to="/new-feature">Features</Link>
                        </li>
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
                        <div id="buttoncon">
                            <Link to="/Login">
                                <button id="login-nav">Login</button>
                            </Link>
                        </div>
                        <button
                            className="hamburger"
                            aria-label="Open menu"
                            onClick={() => setMenuOpen(true)}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            {menuOpen && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu-content">
                        <button
                            className="close-mobile-menu"
                            aria-label="Close menu"
                            onClick={closeMenu}
                        >
                            &times;
                        </button>
                        <ul>
                            <li>
                                <Link to="/home" onClick={closeMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to="/study" onClick={closeMenu}>Study Resources</Link>
                            </li>
                            <li>
                                <Link to="/Questions" onClick={closeMenu}>Questions</Link>
                            </li>
                            <li>
                                <Link to="/new-feature" onClick={closeMenu}>Features</Link>
                            </li>
                            <li>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSdxNnJYfr7VHsAjexJq2yvWaoo30azdNey_j4KVwYos3IaeZw/viewform?usp=dialog"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                >
                                    <button id="contribute-nav-mobile">Contribute</button>
                                </a>
                            </li>
                            <li>
                                <Link to="/Login" onClick={closeMenu}>
                                    <button id="login-nav-mobile">Login</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;