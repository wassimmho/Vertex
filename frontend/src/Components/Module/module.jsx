import Navbar from "../../Components/Navbar/Navbar";
import Footerdoc from "../../Components/Footerdoc/Footerdoc";
import { useEffect, useState } from 'react';
import Filtre from "../Filtre/filtre";
import Resources from "../Resources/Resources";
import Contribute from "../Contribute/Contribute";
import './module.css';

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
                        <p className="module-exp"  >{selectedModule.description}</p>
                        <div className="module-coe-container">
                            <p className="module-coe" >Coefficient: {selectedModule.coeff}</p>
                        </div>
                        <div className="links">
                            {selectedModule.resources && selectedModule.resources.length > 0 ? (
                                selectedModule.resources.map((resource, index) => (
                                    <li key={index}>
                                        {resource.link ? (
                                            <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                                {resource.title}
                                            </a>
                                        ) : (
                                            <span>{resource.title} (No link available)</span>
                                        )}
                                    </li>
                                ))
                            ) : (
                                <p>No resources available for this module.</p>
                            )}
                        </div>
                        <div className="Resources">
                            <h2>Resources</h2>
                            <Resources
                                resources={selectedModule.resources}
                                externalResources={selectedModule["External Resources"]}
                            />
                        </div>
                        <div className="contribute-component">
                            <Contribute />
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