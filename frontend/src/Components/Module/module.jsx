import Navbar from "../../Components/Navbar/Navbar";
import Footerdoc from "../../Components/Footerdoc/Footerdoc";
import Filtre from "../../Components/Filtre/filtre";
import Resources from "../../Components/Resources/Resources";
import {Navigate} from 'react-router-dom';

const module = () =>{
    return(
        <div className="container-module-info">
                <nav >
                    <Filtre />
                </nav>
                    <div className="module-info"> 
                        <h1 className="module-name">ASD1</h1>
                        <p className="module-exp">
                        This fundamental course explores systematic methods (algorithms) for solving problems and the different ways of 
                            organizing and storing data (data structures). It is essential for developing efficient, fast,<br></br>and optimized programs, 
                                and constitutes the cornerstone of all high-performance software design.
                        </p>
                        <div className="links">
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">youtube</a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">youtube 2</a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">youtube 3</a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">youtube 4</a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">youtube 5</a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">youtube 6</a>


                        </div>
                        <h1 className="module-name">External Resources</h1>
                        <div className="resources">
                            <Resources/>
                        </div>
                    </div>
                </div>
    );
}
export default module;