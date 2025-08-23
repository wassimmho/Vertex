import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Question from "../../Components/Question/Question";
import "./Questions.css";
import Search from "../../assets/search.svg";
import Filtre from "../../assets/filter.png";
import AddQuestion from "../../Components/AddQuestion/AddQuestion";

const Questions = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false); 
    const [selectedTags, setSelectedTags] = useState([]);
    const [sortBy, setSortBy] = useState("recent"); 
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

    const handleTagClick = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag)
                ? prev.filter((t) => t !== tag)
                : [...prev, tag]
        );
    };

    const QuestionInfo = [
        {
            id: 1,
            title: "Friendly URL is already in use problem in Liferay ",
            content: "I'm experiencing an issue where the friendly URL is already in use in Liferay. I've checked the database and there are no duplicate entries, but the error persists.",
            userName: "Stamboli abdelmohssine",
            userAvatar: "https://i.pravatar.cc/100?img=1",
            onUpvote: () => {},
            upvotes: 5,
            tags: ["Liferay", "URL", "SEO"],
            createdAt: new Date()
        },
        {
            id: 2,
            title: "How to implement SEO best practices in Liferay?",
            content: "I'm looking for guidance on implementing SEO best practices within Liferay.",
            userName: "John Doe",
            userAvatar: "https://i.pravatar.cc/100?img=2",
            onUpvote: () => {},
            upvotes: 10,
            tags: ["Liferay", "SEO"],
            createdAt: new Date(Date.now() - 10000000)
        },
        {
            id: 3,
            title: "Best practices for using Liferay's Asset Publisher",
            content: "I'm trying to get the most out of Liferay's Asset Publisher. Any tips?",
            userName: "Jane Smith",
            userAvatar: "https://i.pravatar.cc/100?img=3",
            onUpvote: () => {},
            upvotes: 2,
            tags: ["Liferay", "Asset Publisher"],
            createdAt: new Date(Date.now() - 5000000)
        },
        {
            id: 3,
            title: "Best practices for using Liferay's Asset Publisher",
            content: "I'm trying to get the most out of Liferay's Asset Publisher. Any tips?",
            userName: "Jane Smith",
            userAvatar: "https://i.pravatar.cc/100?img=3",
            onUpvote: () => {},
            upvotes: 2,
            tags: ["Liferay", "Asset Publisher"],
            createdAt: new Date(Date.now() - 5000000)
        },
        {
            id: 4,
            title: "Best practices for using Liferay's Asset Publisher",
            content: "I'm trying to get the most out of Liferay's Asset Publisher. Any tips?",
            userName: "Jane Smith",
            userAvatar: "https://i.pravatar.cc/100?img=3",
            onUpvote: () => {},
            upvotes: 2,
            tags: ["Liferay", "Asset Publisher"],
            createdAt: new Date(Date.now() - 5000000)
        },
        {
            id: 5,
            title: "Best practices for using Liferay's Asset Publisher",
            content: "I'm trying to get the most out of Liferay's Asset Publisher. Any tips?",
            userName: "Jane Smith",
            userAvatar: "https://i.pravatar.cc/100?img=3",
            onUpvote: () => {},
            upvotes: 2,
            tags: ["Liferay", "Asset Publisher"],
            createdAt: new Date(Date.now() - 5000000)
        },
        {
            id: 5,
            title: "Best practices for using Liferay's Asset Publisher",
            content: "I'm trying to get the most out of Liferay's Asset Publisher. Any tips?",
            userName: "Jane Smith",
            userAvatar: "https://i.pravatar.cc/100?img=3",
            onUpvote: () => {},
            upvotes: 2,
            tags: ["Liferay", "Asset Publisher"],
            createdAt: new Date(Date.now() - 5000000)
        },
        {
            id: 5,
            title: "Best practices for using Liferay's Asset Publisher",
            content: "I'm trying to get the most out of Liferay's Asset Publisher. Any tips?",
            userName: "Jane Smith",
            userAvatar: "https://i.pravatar.cc/100?img=3",
            onUpvote: () => {},
            upvotes: 2,
            tags: ["Liferay", "Asset Publisher"],
            createdAt: new Date(Date.now() - 5000000)
        },
        {
            id: 5,
            title: "Best practices for using Liferay's Asset Publisher",
            content: "I'm trying to get the most out of Liferay's Asset Publisher. Any tips?",
            userName: "Jane Smith",
            userAvatar: "https://i.pravatar.cc/100?img=3",
            onUpvote: () => {},
            upvotes: 2,
            tags: ["Liferay", "Asset Publisher"],
            createdAt: new Date(Date.now() - 5000000)
        },
        {
            id: 6,
            title: "Best practices for using Liferay's Asset Publisher",
            content: "I'm trying to get the most out of Liferay's Asset Publisher. Any tips?",
            userName: "Jane Smith",
            userAvatar: "https://i.pravatar.cc/100?img=3",
            onUpvote: () => {},
            upvotes: 2,
            tags: ["Liferay", "Asset Publisher"],
            createdAt: new Date(Date.now() - 5000000)
        }
    ];

    const sortedQuestions = [...QuestionInfo].sort((a, b) => {
        if (sortBy === "recent") return b.createdAt - a.createdAt;
        if (sortBy === "upvotes") return b.upvotes - a.upvotes;
        return 0;
    });

    return (
        <div className="questions-container">
            <div className="questions-header">
                <Navbar/>
            </div>
            <div className="questions-grid">
                <div className="Questions-title">Questions</div>
                <div className="Question-grid-header">
                    <div className="Questions-AddButton" onClick={() => setModalOpen(true)}>
                        Add Question <div className="Questions-AddButton-Icon"></div>
                    </div>
                    <div className="Questions-FilterWrapper">
                        <button 
                            className="Questions-FilterButton" 
                            type="button"
                            onClick={() => setFilterOpen(!filterOpen)}
                        >
                            <img src={Filtre} alt="Filter" />
                            Filter
                        </button>

                        {filterOpen && (
                            <div className="Questions-FilterCard">
                                <div className="Questions-filter-section">
                                    <h4>Sort by</h4>
                                    <select 
                                        value={sortBy} 
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="recent">Recent</option>
                                        <option value="upvotes">Most Upvoted</option>
                                    </select>
                                </div>
                                <div className="Questions-filter-section">
                                    <h4>Tags</h4>
                                    <div className="Questions-tags-list">
                                        {TAG_OPTIONS.map((tag) => (
                                            <label
                                                key={tag}
                                                className={`Questions-tag-item${selectedTags.includes(tag) ? ' selected' : ''}`}
                                                onClick={() => handleTagClick(tag)}
                                            >
                                                {tag}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="Questions-SearchBar">
                    <img src={Search} alt="Search" />
                    <span>search</span>
                </div>
                <div className="Questions-list">
                    {sortedQuestions.map((question, index) => (
                        <Question key={index} {...question} 
                            onClick={() => {
                                const QuestionId = question.id;
                                navigate("/response", { state: { question: { ...question, id: QuestionId } } });
                            }}
                        />
                    ))}
                </div>
            </div>

            {modalOpen && (
                <div className="modal-overlay" onClick={() => setModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <AddQuestion onAdd={e => e.preventDefault()} onCancel={() => setModalOpen(false)} />
                        <button className="modal-close" onClick={() => setModalOpen(false)}>&times;</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Questions;
