import React, { useState } from 'react';
import './filter.css';
import arrow from '../../assets/arrow.svg';
import path from 'path';
import ENG1 from '../../Courses/ENG/1PC/ENG1.json'
import ENG2 from '../../Courses/ENG/2PC/ENG2.json';
import AI1 from '../../Courses/ENG/3PC/AI1.json';
import CS1 from '../../Courses/ENG/3PC/CS1.json';
import SE1 from '../../Courses/ENG/3PC/SE1.json';
import AI2 from '../../Courses/ENG/4PC/AI2.json';
import CS2 from '../../Courses/ENG/4PC/CS2.json';
import SE2 from '../../Courses/ENG/4PC/SE2.json'; 



const lmdYears = [
  { year: 'L1', specialities: ['Spec A', 'Spec B'] },
  { year: 'L2', specialities: ['Spec C', 'Spec D'] },
  { year: 'L3', specialities: ['Spec E', 'Spec F'] },
  { year: 'M1', specialities: ['Spec G', 'Spec H'] },
  { year: 'M2', specialities: ['Spec I', 'Spec J'] },
];

const engYears = [
  { year: '1PC', specialities: [ENG1[0].specialities] },
  { year: '2PC', specialities: [ENG2[0].specialities] },
  { year: '3SC', specialities: [AI1[0].specialities, CS1[0].specialities, SE1[0].specialities] },
  { year: '4SC', specialities: [AI2[0].specialities, CS2[0].specialities, SE2[0].specialities] },
  { year: '5SC', specialities: [] },
];

const arrowIcon = (open) => (
  <img
    src={arrow}
    alt="arrow"
    style={{
      width: '1em',
      height: '1em',
      transition: 'transform 0.2s',
      transform: open ? 'rotate(-90deg)' : 'rotate(0deg)',
      marginLeft: 'auto',
      display: 'inline-block',
      verticalAlign: 'middle',
    }}
  />
);

const Filtre = ({ onSpecialitySelect, onModuleSelect, selectedSpeciality, selectedModule }) => {
  const [openSection, setOpenSection] = useState(null); // 'LMD' or 'Engineering'
  const [openYear, setOpenYear] = useState({}); // { LMD: null, Engineering: null }

  const handleSectionClick = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleYearClick = (section, year) => {
    setOpenYear((prev) => ({ ...prev, [section]: prev[section] === year ? null : year }));
  };

  const handleSpecialityClick = (speciality) => {
    console.log('Speciality clicked:', speciality, 'Current selectedSpeciality:', selectedSpeciality);
    if (onSpecialitySelect) {
      onSpecialitySelect(selectedSpeciality === speciality ? null : speciality);
    }
  };

  const handleModuleClick = (module) => {
    console.log('Module clicked:', module);
    if (onModuleSelect) {
      onModuleSelect(module);
    }
  };

  const getModulesForSpeciality = (speciality) => {
    const allData = [ENG1, ENG2, AI1, CS1, SE1, AI2, CS2, SE2];
    const foundData = allData.find((data) => data[0].specialities === speciality);
    return foundData ? foundData.slice(1) : [];
  };

  return (
    <div className="filtre-container">
      <div className="filtre-section">
        <div className="filtre-header" onClick={() => handleSectionClick('LMD')}>
          <span className="filtre-title">LMD</span>
          {arrowIcon(openSection === 'LMD')}
        </div>
        {openSection === 'LMD' && (
          <div className="filtre-years">
            {lmdYears.map(({ year, specialities }) => (
              <div key={year}>
                <div className="filtre-year" onClick={() => handleYearClick('LMD', year)}>
                  {year} {arrowIcon(openYear['LMD'] === year)}
                </div>
                {openYear['LMD'] === year && (
                  <ul className="filtre-specialities">
                    {specialities.map((spec) => (
                      <li key={spec} onClick={() => handleSpecialityClick(spec)}>
                        {spec}
                        {selectedSpeciality === spec && (
                          <ul className="filtre-modules">
                            {getModulesForSpeciality(spec).map((semester) =>
                              semester.courses.map((course) => (
                                <li
                                  key={course.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleModuleClick(course);
                                  }}
                                  className={selectedModule && selectedModule.id === course.id ? 'selected-module' : ''}
                                >
                                  {course.title}
                                </li>
                              ))
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="filtre-section">
        <div className="filtre-header" onClick={() => handleSectionClick('Engineering')}>
          <span className="filtre-title">Engineering</span>
          {arrowIcon(openSection === 'Engineering')}
        </div>
        {openSection === 'Engineering' && (
          <div className="filtre-years">
            {engYears.map(({ year, specialities }) => (
              <div key={year}>
                <div className="filtre-year" onClick={() => handleYearClick('Engineering', year)}>
                  {year} {arrowIcon(openYear['Engineering'] === year)}
                </div>
                {openYear['Engineering'] === year && (
                  <ul className="filtre-specialities">
                    {specialities.map((spec) => (
                      <li key={spec} onClick={() => handleSpecialityClick(spec)}>
                        {spec}
                        {selectedSpeciality === spec && (
                          <ul className="filtre-modules">
                            {getModulesForSpeciality(spec).map((semester) =>
                              semester.courses.map((course) => (
                                <li
                                  key={course.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleModuleClick(course);
                                  }}
                                  className={selectedModule && selectedModule.id === course.id ? 'selected-module' : ''}
                                >
                                  {course.title}
                                </li>
                              ))
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filtre;
