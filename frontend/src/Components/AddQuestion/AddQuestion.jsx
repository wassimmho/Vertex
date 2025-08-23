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
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        tags: []
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleTagClick = (tag) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.includes(tag)
                ? prev.tags.filter((t) => t !== tag)
                : [...prev.tags, tag]
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.title.trim()) {
            newErrors.title = "Title is required";
        } else if (formData.title.length < 5) {
            newErrors.title = "Title must be at least 5 characters";
        }
        
        if (!formData.content.trim()) {
            newErrors.content = "Content is required";
        } else if (formData.content.length < 20) {
            newErrors.content = "Content must be at least 20 characters";
        }
        
        if (formData.tags.length === 0) {
            newErrors.tags = "Please select at least one tag";
        }
        
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setIsLoading(true);
        
        try {
            console.log("Question data:", formData);
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            if (onAdd) {
                onAdd(formData);
            }
            
            alert("Question added successfully!");
            
        } catch (error) {
            setErrors({ submit: "Failed to add question. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="add-question-modal-container">
            <div className="add-question-content">
                <div className="add-question-form-wrapper">
                    <button 
                        className="modal-close-btn"
                        onClick={onCancel || (() => window.history.back())}
                    >
                        ×
                    </button>
                    
                    <div className="add-question-header">
                        <h1 className="add-question-title">Add New Question</h1>
                        <p className="add-question-subtitle">Share your question with the community</p>
                    </div>
                    
                    <form className="add-question-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title" className="form-label">
                                Question Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className={`form-input ${errors.title ? 'form-input-error' : ''}`}
                                placeholder="Enter your question title"
                                maxLength={100}
                            />
                            {errors.title && (
                                <span className="form-error">{errors.title}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="content" className="form-label">
                                Question Content
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                className={`form-textarea ${errors.content ? 'form-input-error' : ''}`}
                                placeholder="Describe your question in detail..."
                                rows={6}
                            />
                            {errors.content && (
                                <span className="form-error">{errors.content}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Tags</label>
                            <div className="tags-container">
                                {TAG_OPTIONS.map((tag) => (
                                    <button
                                        key={tag}
                                        type="button"
                                        className={`tag-item ${formData.tags.includes(tag) ? 'tag-selected' : ''}`}
                                        onClick={() => handleTagClick(tag)}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                            {errors.tags && (
                                <span className="form-error">{errors.tags}</span>
                            )}
                        </div>

                        {errors.submit && (
                            <div className="form-error-general">
                                {errors.submit}
                            </div>
                        )}

                        <div className="form-buttons">
                            <button 
                                type="submit" 
                                className="submit-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? "Adding Question..." : "Add Question"}
                            </button>
                            <button 
                                type="button" 
                                className="cancel-btn"
                                onClick={onCancel || (() => window.history.back())}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddQuestion;