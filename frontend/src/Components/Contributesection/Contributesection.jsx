import "./Contributesection.css"
import shape from "../../assets/weirdshape.svg";
import Footerhome from "../Footerhome/Footerhome";
function Contributesection() {
    return (
        <>
            <div className="contribute-container">
                <div className="contribute-content">
                    <h1 id="contribute-title">Your Contribution Counts</h1>
                    <p id="contribute-paragraph">Every resource you share makes a real difference.
                        By contributing to Vertex, you directly empower fellow students,
                        helping them succeed in their studies.
                        Your generosity strengthens our entire USTHB community.</p>
                </div>
                
                <div className="contribute-media">
                    <a
                        id="contribute-button"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdxNnJYfr7VHsAjexJq2yvWaoo30azdNey_j4KVwYos3IaeZw/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        
                    </a>
                    <img src={shape} alt="dashed shape" className="shape" id="topshape"/>
                    <img src={shape} alt="dashed shape" className="shape" id="bottomshape"/>
                </div>
                {/*<div className="contribute-footer">
                <Footerhome/>
                </div>*/}
            </div>
        </>
    );
}

export default Contributesection;