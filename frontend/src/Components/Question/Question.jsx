
import React from "react";
import "./Question.css";
import Upvote from "../../assets/upvote.svg"; // Assuming you have an Upvote component

function Question({ title, content, userName, userAvatar, onUpvote, upvotes, tags = [], createdAt }) {
    return (
        <div className="question">
            <div className="question-header">
                <div className="question-user">
                    <img src={userAvatar}alt={userName}className="question-avatar"/>
                    <span className="question-username">{userName}</span>
                </div>
                <button className="question-upvote" onClick={onUpvote} title="Upvote">
                    <img src={Upvote} alt="Upvote" />
                    <span>{upvotes}</span>
                </button>
            </div>
            <h2 className="question-title">{title}</h2>
                <p className="question-content">
                    {content.length > 100 ? content.slice(0, 150) + "..." : content}
                </p>

                <div className="question-meta">
                    <div className="question-tags">
                        {tags.map((tag, id) => (
                            <span className="question-tag" key={id}>{tag}</span>
                        ))}
                    </div>
                        <span className="question-date">{new Date(createdAt).toLocaleDateString()}</span>
                   
                </div>
        </div>
    );
}

export default Question;
