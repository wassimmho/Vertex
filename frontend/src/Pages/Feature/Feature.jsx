import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

const Feature = () => {
    return (
        <div className="new-feature-container">
            <div className="new-feature-header">
                <Navbar />
            </div>
            <h1>New Feature</h1>
            <p>This is the new feature page.</p>
        </div>
    );
};

export default Feature;
