import React, { useState } from 'react';
import './filter.css';
import arrow from '../../assets/arrow.svg';

const lmdYears = [
  { year: 'L1', specialities: ['Spec A', 'Spec B'] },
  { year: 'L2', specialities: ['Spec C', 'Spec D'] },
  { year: 'L3', specialities: ['Spec E', 'Spec F'] },
  { year: 'M1', specialities: ['Spec G', 'Spec H'] },
  { year: 'M2', specialities: ['Spec I', 'Spec J'] },
];

const engYears = [
  { year: '1PC', specialities: ['Spec K', 'Spec L'] },
  { year: '2PC', specialities: ['Spec M', 'Spec N'] },
  { year: '3SC', specialities: ['Spec O', 'Spec P'] },
  { year: '4SC', specialities: ['Spec Q', 'Spec R'] },
  { year: '5SC', specialities: ['Spec S', 'Spec T'] },
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

const Filtre = () => {
  const [openSection, setOpenSection] = useState(null); // 'LMD' or 'Engineering'
  const [openYear, setOpenYear] = useState({}); // { LMD: null, Engineering: null }

  const handleSectionClick = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleYearClick = (section, year) => {
    setOpenYear((prev) => ({ ...prev, [section]: prev[section] === year ? null : year }));
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
                      <li key={spec}>{spec}</li>
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
                      <li key={spec}>{spec}</li>
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
