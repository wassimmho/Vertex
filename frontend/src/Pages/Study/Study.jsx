import Navbar from "../../Components/Navbar/Navbar";
import Footerdoc from "../../Components/Footerdoc/Footerdoc";
import Module from "../../Components/Module/module";
import './Study.css'

const Study = () =>{
    return(
        <>
            <div className="Study-container">
                <Navbar />
                <div className="Study-main-content">
                    <Module />
                </div>
                <div className="Footer-doc">
                    <Footerdoc />
                </div>
            </div>
        </>
    );

};
export default Study;