import React, { useState } from 'react';
import './filter.css';
import arrow from '../../assets/arrow.svg';

import ENG1 from '../../Courses/ENG/1PC/ENG1.json'

import ENG2 from '../../Courses/ENG/2PC/ENG2.json';

import AI1 from '../../Courses/ENG/3PC/AI1.json';
import CS1 from '../../Courses/ENG/3PC/CS1.json';
import SE1 from '../../Courses/ENG/3PC/SE1.json';

import AI2 from '../../Courses/ENG/4PC/AI2.json';
import CS2 from '../../Courses/ENG/4PC/CS2.json';
import SE2 from '../../Courses/ENG/4PC/SE2.json'; 

import L1 from '../../Courses/LMD/L1/L1.json';

import ACAD2 from '../../Courses/LMD/L2/ACAD2.json';
import GTR2 from '../../Courses/LMD/L2/GTR2.json';
import ISIL2 from '../../Courses/LMD/L2/ISIL2.json';

import ACAD3 from '../../Courses/LMD/L3/ACAD3.json';
import GTR3 from '../../Courses/LMD/L3/GTR3.json';
import ISIL3 from '../../Courses/LMD/L3/ISIL3.json';

import BIGDATA1 from '../../Courses/LMD/M1/BIGDATA1.json';
import BIOINFO1 from '../../Courses/LMD/M1/BIOINFO1.json';
import HPC1 from '../../Courses/LMD/M1/HPC1.json';
import IL1 from '../../Courses/LMD/M1/IL1.json';
import IV1 from '../../Courses/LMD/M1/IV1.json';
import RSD1 from '../../Courses/LMD/M1/RSD1.json';
import SII1 from '../../Courses/LMD/M1/SII1.json';
import SSI1 from '../../Courses/LMD/M1/SSI1.json';

import BIGDATA2 from '../../Courses/LMD/M2/BIGDATA2.json';
import BIOINFO2 from '../../Courses/LMD/M2/BIOINFO2.json';
import HPC2 from '../../Courses/LMD/M2/HPC2.json';
import IL2 from '../../Courses/LMD/M2/IL2.json';
import IV2 from '../../Courses/LMD/M2/IV2.json';
import RSD2 from '../../Courses/LMD/M2/RSD2.json';
import SII2 from '../../Courses/LMD/M2/SII2.json';
import SSI2 from '../../Courses/LMD/M2/SSI2.json';

const lmdYears = [
  { year: 'L1', specialities: [L1[0].specialities] },
  { year: 'L2', specialities: [ACAD2[0].specialities, GTR2[0].specialities, ISIL2[0].specialities] },
  { year: 'L3', specialities: [ACAD3[0].specialities, GTR3[0].specialities, ISIL3[0].specialities] },
  { year: 'M1', specialities: [
      BIGDATA1[0].specialities,
      BIOINFO1[0].specialities,
      HPC1[0].specialities,
      IL1[0].specialities,
      IV1[0].specialities,
      RSD1[0].specialities,
      SII1[0].specialities,
      SSI1[0].specialities
    ]
  },
  { year: 'M2', specialities: [
      BIGDATA2[0].specialities,
      BIOINFO2[0].specialities,
      HPC2[0].specialities,
      IL2[0].specialities,
      IV2[0].specialities,
      RSD2[0].specialities,
      SII2[0].specialities,
      SSI2[0].specialities
    ]
  },
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

  const getModulesForSpeciality = (section, speciality) => {
    let allData = [];
    if (section === 'LMD') {
      allData = [
        L1, ACAD2, GTR2, ISIL2, ACAD3, GTR3, ISIL3,
        BIGDATA1, BIOINFO1, HPC1, IL1, IV1, RSD1, SII1, SSI1,
        BIGDATA2, BIOINFO2, HPC2, IL2, IV2, RSD2, SII2, SSI2
      ];
    } else if (section === 'Engineering') {
      allData = [ENG1, ENG2, AI1, CS1, SE1, AI2, CS2, SE2];
    }
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
                            {getModulesForSpeciality('LMD',spec).map((semester) =>
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
                            {getModulesForSpeciality('Engineering',spec).map((semester) =>
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
