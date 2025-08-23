import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Feature.css";

const Feature = () => {
    const [subjects, setSubjects] = useState([
        { id: 1, name: "", ccGrade: "", examGrade: "", coefficient: "", subjectAverage: null }
    ]);
    const [semesterAverage, setSemesterAverage] = useState(null);

    const addSubject = () => {
        const newId = Math.max(...subjects.map(s => s.id)) + 1;
        setSubjects([...subjects, { id: newId, name: "", ccGrade: "", examGrade: "", coefficient: "", subjectAverage: null }]);
    };

    const removeSubject = (id) => {
        if (subjects.length > 1) {
            setSubjects(subjects.filter(subject => subject.id !== id));
        }
    };

    const updateSubject = (id, field, value) => {
        setSubjects(subjects.map(subject => 
            subject.id === id ? { ...subject, [field]: value } : subject
        ));
    };

    const calculateSubjectAverage = (ccGrade, examGrade) => {
        const cc = parseFloat(ccGrade);
        const exam = parseFloat(examGrade);
        if (!isNaN(cc) && !isNaN(exam) && cc >= 0 && cc <= 20 && exam >= 0 && exam <= 20) {
            return (cc * 0.4 + exam * 0.6).toFixed(2);
        }
        return null;
    };

    const calculateAverages = () => {
        // First, calculate each subject's average
        const updatedSubjects = subjects.map(subject => {
            const subjectAvg = calculateSubjectAverage(subject.ccGrade, subject.examGrade);
            return { ...subject, subjectAverage: subjectAvg };
        });
        
        setSubjects(updatedSubjects);

        // Then calculate semester average
        const validSubjects = updatedSubjects.filter(s => 
            s.name.trim() && s.subjectAverage !== null && s.coefficient.trim() &&
            !isNaN(parseFloat(s.coefficient))
        );

        if (validSubjects.length === 0) {
            alert("Please enter valid CC grades, exam grades (0-20), and coefficients for at least one subject.");
            return;
        }

        let totalPoints = 0;
        let totalCoefficients = 0;

        validSubjects.forEach(subject => {
            const subjectAvg = parseFloat(subject.subjectAverage);
            const coefficient = parseFloat(subject.coefficient);
            totalPoints += subjectAvg * coefficient;
            totalCoefficients += coefficient;
        });

        const calculatedSemesterAverage = totalCoefficients > 0 ? (totalPoints / totalCoefficients).toFixed(2) : 0;
        setSemesterAverage(calculatedSemesterAverage);
    };

    return (
        <div className="new-feature-container">
            <div className="new-feature-header">
                <Navbar />
            </div>
            
            <div className="feature-content">
                <h1 className="feature-title">Website Features</h1>
                <p className="feature-subtitle">
                    Discover the powerful tools and features available to enhance your academic experience
                </p>

                <div className="features-grid">
                    {/* GPA Calculator Feature */}
                    <div className="feature-card">
                        <div className="feature-card-header">
                            <h2 className="feature-card-title">📊 Semester Average Calculator</h2>
                            <p className="feature-card-description">
                                Calculate your semester average. For each subject: Subject Average = (CC × 40%) + (Exam × 60%)
                            </p>
                        </div>
                        
                        <div className="gpa-calculator">
                            {subjects.map((subject) => (
                                <div key={subject.id} className="subject-input-group">
                                    <div className="input-field">
                                        <label className="input-label">Subject Name</label>
                                        <input
                                            type="text"
                                            className="subject-input"
                                            placeholder="e.g., Mathematics"
                                            value={subject.name}
                                            onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label className="input-label">CC (/20)</label>
                                        <input
                                            type="number"
                                            className="grade-input"
                                            placeholder="CC"
                                            min="0"
                                            max="20"
                                            step="0.25"
                                            value={subject.ccGrade}
                                            onChange={(e) => updateSubject(subject.id, 'ccGrade', e.target.value)}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label className="input-label">Exam (/20)</label>
                                        <input
                                            type="number"
                                            className="grade-input"
                                            placeholder="Exam"
                                            min="0"
                                            max="20"
                                            step="0.25"
                                            value={subject.examGrade}
                                            onChange={(e) => updateSubject(subject.id, 'examGrade', e.target.value)}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label className="input-label">Coefficient</label>
                                        <input
                                            type="number"
                                            className="credit-input"
                                            placeholder="Coeff"
                                            min="1"
                                            step="1"
                                            value={subject.coefficient}
                                            onChange={(e) => updateSubject(subject.id, 'coefficient', e.target.value)}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label className="input-label">Subject Avg</label>
                                        <div className="subject-average-display">
                                            {subject.subjectAverage !== null ? `${subject.subjectAverage}/20` : '--'}
                                        </div>
                                    </div>
                                    <div className="input-field">
                                        <label className="input-label">Actions</label>
                                        <button
                                            className="remove-subject-btn"
                                            onClick={() => removeSubject(subject.id)}
                                            disabled={subjects.length === 1}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button className="add-subject-btn" onClick={addSubject}>
                                + Add Subject
                            </button>
                            <button className="calculate-btn" onClick={calculateAverages}>
                                Calculate Averages
                            </button>
                            {semesterAverage !== null && (
                                <div className="gpa-result">
                                    <div className="gpa-value">{semesterAverage}/20</div>
                                    <div className="gpa-label">Your Semester Average</div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Placeholder for Future Features */}
                    <div className="feature-card">
                        <div className="feature-card-header">
                            <h2 className="feature-card-title">🎯 Study Planner</h2>
                            <p className="feature-card-description">
                                Plan your study schedule and track your progress throughout the semester.
                            </p>
                        </div>
                        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                            Coming Soon...
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-header">
                            <h2 className="feature-card-title">📚 Resource Library</h2>
                            <p className="feature-card-description">
                                Access curated study materials and resources for your courses.
                            </p>
                        </div>
                        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                            Coming Soon...
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-header">
                            <h2 className="feature-card-title">⏰ Exam Tracker</h2>
                            <p className="feature-card-description">
                                Keep track of upcoming exams and important academic deadlines.
                            </p>
                        </div>
                        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                            Coming Soon...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
