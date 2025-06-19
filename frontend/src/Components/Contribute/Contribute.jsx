import "./Contribute.css";
import { useState } from "react";

const Contribute = () => {
    return (
        <div className="contribute-container1">
            <div className="contribute-box">
                <h3 className="contribute-title">Contribute to our platform</h3>
                <div className="contribute-text">
                    <p>Your help makes a real difference. Share your notes, solved exercises, 
                        or useful video links for this course. Every contribution helps fellow students
                         master these concepts and succeed in their studies. <span className="contribute-highlight">Contribute.</span></p>
                </div>
            </div>
        </div>
    );
}
export default Contribute;