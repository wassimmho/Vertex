import React, { useState } from "react";
import "./AddQuestion.css";

const TAG_OPTIONS = [
    "React",
    "JavaScript",
    "CSS",
    "HTML",
    "Frontend",
    "Backend",
    "API",
    "Database"
];

const AddQuestion = ({ onAdd, onCancel }) => {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagClick = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag)
                ? prev.filter((t) => t !== tag)
                : [...prev, tag]
        );
    };

    return(
        <div className="add-question-container">
            <form onSubmit={onAdd} className="add-question-form">
                <span className="add-question-title" >Title Question</span>
                <input className="add-question-input" type="text" placeholder="Title Question" maxLength={10}/>
                <span className="add-question-content">Content Question</span>
                <textarea className="add-question-textarea" placeholder="Content Question"></textarea>
                <span className="add-question-tags">Tags</span>
                <div className="add-question-tags-list">
                    {TAG_OPTIONS.map((tag) => (
                        <label
                            key={tag}
                            className={`add-question-tag-item${selectedTags.includes(tag) ? ' selected' : ''}`}
                            tabIndex={0}
                            onClick={() => handleTagClick(tag)}
                            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleTagClick(tag); }}
                        >
                            <input
                                type="checkbox"
                                name="tags"
                                value={tag}
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleTagClick(tag)}
                                className="visually-hidden"
                                tabIndex={-1}
                            />
                            {tag}
                        </label>
                    ))}
                </div>
                <div className="add-question-buttons">
                    <button className="add-question-button-submit" type="submit">Add Question</button>
                    <button className="add-question-button-cancel" type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default AddQuestion;