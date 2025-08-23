
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Response.css";

const Response = ({title , content , userName , userAvatar , onUpvote , upvotes , tags = [] , createdAt }) => {
    const Question = {
        id: 1,
        title: "Friendly URL is already in use problem in Liferay ",
        content: "I'm experiencing an issue where the friendly URL is already in use in Liferay. I've checked the database and there are no duplicate entries, but the error persists.",
        userName: "Stamboli abdelmohssine",
        userAvatar: "https://i.pravatar.cc/100?img=1",
        onUpvote: () => {},
        upvotes: 5,
        tags: ["Liferay", "URL", "SEO", "Analyse" , "Algebre" , "Fonction" , "سلآم "],
        createdAt: new Date()
    };

    const responses = [
        {
            id: 1,
            userName: "Jane Doe",
            userAvatar: "https://i.pravatar.cc/100?img=1",
            content: "Have you tried clearing the cache? Sometimes Liferay keeps old URLs cached.",
            createdAt: new Date(),
        },
        {
            id: 2,
            userName: "John Smith",
            userAvatar: "https://i.pravatar.cc/100?img=1",
            content: "Check if there are any hidden pages with the same URL. Also, review the URL mapping settings.",
            createdAt: new Date(),
        },
        {
            id: 3,
            userName: "Alice Johnson",
            userAvatar: "https://i.pravatar.cc/100?img=1",
            content: "Make sure that no other site or group is using the same friendly URL. It can sometimes cause conflicts.",
            createdAt: new Date(),
        },
    ];


    return (
        <div className="response-bg">
            <Navbar />
            <div className="question-card">
                <div className="question-header">
                    <img className="user-avatar" src={Question.userAvatar}  alt={Question.userName} />
                    <div className="user-info">
                        <span className="user-name">{userName || Question.userName}</span>

                    </div>
                    <div className="upvote-section">
                        <button className="upvote-btn" onClick={Question.onUpvote} title="Upvote">▲</button>
                        <span className="upvote-count">{Question.upvotes || upvotes}</span>
                    </div>
                </div>
                <div className="question-body">
                    <h2 className="question-title">{Question.title || title}</h2>
                    <p className="question-content">{Question.content || content}</p>
                </div>
                <div className="question-tags">
                    {Question.tags.map((tag, idx) => (
                        <span className="tag" key={idx}>{tag || tags[idx]}</span>
                    ))}
                </div>
                <span className="question-date">{Question.createdAt.toLocaleDateString()} || {createdAt}</span>
            </div>

            <div className="responses-section">
                <div className="responses-header">
                    <h3>Responses</h3>
                    <button className="add-response-btn">Add Response</button>
                </div>
                <div className="responses-list">
                    {responses.length === 0 ? (
                        <div className="no-responses">No responses yet. Be the first to respond!</div>
                    ) : (
                        responses.map((resp) => (
                            <div className="response-item" key={resp.id}>
                                <img className="response-avatar" src={resp.userAvatar} alt={resp.userName} />
                                <div className="response-content-block">
                                    <div className="response-user-info">
                                        <span className="response-username">{resp.userName}</span>
                                        <span className="response-date">{resp.createdAt.toLocaleDateString()}</span>
                                    </div>
                                    <div className="response-text">{resp.content}</div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Response;