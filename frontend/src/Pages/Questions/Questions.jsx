import React, { useState }  from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Question from "../../Components/Question/Question";
import "./Questions.css";
import Search from "../../assets/search.svg";
import AddQuestion from "../../Components/AddQuestion/AddQuestion";
const Questions = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [Questions, setQuestions] = useState([]);
    const QuestionInfo = [
        {
            title: "Friendly URL is already in use problem in Liferay ",
            content: "I'm experiencing an issue where the friendly URL is already in use in Liferay. I've checked the database and there are no duplicate entries, but the error persists. Has anyone encountered this before or have suggestions on how to resolve it? Any help would be appreciated!",
            userName: "Stamboli abdelmohssine",
            userAvatar: "https://i.pravatar.cc/100?img=1",
            onUpvote: () => {},
            upvotes: 0,
            tags: ["Liferay", "URL", "SEO"],
            createdAt: new Date()
        },
        {
            title: "How to implement SEO best practices in Liferay?",
            content: "I'm looking for guidance on implementing SEO best practices within Liferay. What are the key areas I should focus on to improve search engine visibility?",
            userName: "John Doe",
            userAvatar: "https://i.pravatar.cc/100?img=2",
            onUpvote: () => {},
            upvotes: 0,
            tags: ["Liferay", "SEO"],
            createdAt: new Date()
        },
        {
            title: "Best practices for using Liferay's Asset Publisher",
            content: "I'm trying to get the most out of Liferay's Asset Publisher. What are some best practices or tips for using it effectively?",
            userName: "Jane Smith",
            userAvatar: "https://i.pravatar.cc/100?img=3",
            onUpvote: () => {},
            upvotes: 0,
            tags: ["Liferay", "Asset Publisher"],
            createdAt: new Date()
        }

    ]
    return (
        <>
        <div className="questions-container">
            <div className="questions-header">
                <Navbar/>
            </div>
            <div className="questions-grid">
                <div className="Questions-title">Recent Questions</div>
                <div className="Questions-AddButton" onClick={() => setModalOpen(true)} style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    Add Question
                    <div className="Questions-AddButton-Icon">+</div>
                </div>
                <div className="Questions-SearchBar">
                    {<img src={Search} alt="Search" />}
                    search</div>
                <div className="Questions-list">
                    {QuestionInfo.map((question, index) => (
                        <Question key={index} {...question} />
                    ))}
                </div>
            </div>

            {/* Modal for AddQuestion */}
            {modalOpen && (
                <div className="modal-overlay" onClick={() => setModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <AddQuestion onAdd={e => e.preventDefault()} onCancel={() => setModalOpen(false)} />
                        <button className="modal-close" onClick={() => setModalOpen(false)}>&times;</button>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default Questions