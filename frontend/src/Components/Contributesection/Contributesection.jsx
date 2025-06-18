import "./Contributesection.css"
import shape from "../../assets/weirdshape.svg";

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
                    <button id="contribute-button"></button>
                    <img src={shape} alt="dashed shape" className="shape" id="topshape"/>
                    <img src={shape} alt="dashed shape" className="shape" id="bottomshape"/>

                </div>
            </div>
        </>
    );
}

export default Contributesection;