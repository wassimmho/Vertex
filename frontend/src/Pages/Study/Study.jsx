import Navbar from "../../Components/Navbar/Navbar";
import Footerdoc from "../../Components/Footerdoc/Footerdoc";
import Filtre from "../../Components/Filtre/filtre";
import Resources from "../../Components/Resources/Resources";
import {Navigate} from 'react-router-dom';
import Module from "../../Components/Module/module";
import './Study.css'

const Study = () =>{

    return(
        <>
            <div className="Study-container">
                    <Navbar />
                    <div>
                        <Module/>
                    </div>
                <div className="Footer-doc">
                    <Footerdoc />
                </div>


            </div>
        </>
    );

};
export default Study;