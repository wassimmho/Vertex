import Navbar from "../../Components/Navbar/Navbar";
import Footerdoc from "../../Components/Footerdoc/Footerdoc";
import { useEffect, useState } from 'react';
import Filtre from "../Filtre/filtre";
import ENG1 from '../../Courses/ENG/1PC/ENG1.json';
import ENG2 from '../../Courses/ENG/2PC/ENG2.json';
import AI1 from '../../Courses/ENG/3PC/AI1.json';
import CS1 from '../../Courses/ENG/3PC/CS1.json';
import SE1 from '../../Courses/ENG/3PC/SE1.json';
import AI2 from '../../Courses/ENG/4PC/AI2.json';
import CS2 from '../../Courses/ENG/4PC/CS2.json';
import SE2 from '../../Courses/ENG/4PC/SE2.json';
import './Module.css';

const module = () => {
    const [selectedSpeciality, setSelectedSpeciality] = useState(null);
    const [selectedModule, setSelectedModule] = useState(null);

    const handleSpecialitySelect = (speciality) => {
        setSelectedSpeciality(speciality);
        setSelectedModule(null); // Reset module selection when speciality changes
    };

    const handleModuleSelect = (module) => {
        setSelectedModule(module);
    };

    return (
        <div className="container-module-info">
            <nav>
                <Filtre
                    onSpecialitySelect={handleSpecialitySelect}
                    onModuleSelect={handleModuleSelect}
                    selectedSpeciality={selectedSpeciality}
                    selectedModule={selectedModule}
                />
            </nav>
            <div className="module-info">
                {selectedModule ? (
                    <div>
                        <h1 className="module-name">{selectedModule.title}</h1>
                          <p className="module-description">{selectedModule.description}</p>
                        <div className="module-coe-container"> 
                          <p className="module-coe">Coefficient: {selectedModule.coeff}</p>
                        </div>
                    </div>
                ) : selectedSpeciality ? (
                    <p id="choose-module-text">Select a module to view its details.</p>
                ) : (
                    <p id="choose-specialty-text">Please select a speciality to view its modules.</p>
                )}
            </div>
        </div>
    );
}
export default module;