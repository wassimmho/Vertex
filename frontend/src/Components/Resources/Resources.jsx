import React from 'react';
import './Resources.css';
import Youtube from "../../assets/youtube.svg"
import Drive from '../../assets/drive.svg'
import Documnet from '../../assets/document.svg'


const Resources = () =>{
    return(
        <div className='container'>

            <div className='Boxs'>

                <div className='box' id='box-youtube'>
                    <div className='hover'></div>
                    <div className='header-box'>
                    <img src={Youtube} alt="Youtube" id="youtube-icon" className='icon' />
                    <span className='text'>Youtube Channels</span>
                    </div>
                </div>
                <div className='box' id='box-drive'>
                    <div className='hover'></div>
                    <div className='header-box'>
                    <img src={Drive} alt="Drive" id="drive-icon" className='icon' />
                    <span className='text'>External Practices</span>

                    </div>
                </div>
                <div className='box' id='box-document'>
                    <div className='hover'></div>
                    <div className='header-box'>
                    <img src={Documnet} alt="Documnet" id="documnet-icon" className='icon' />
                    <span className='text'>Documents</span>


                    </div>
                </div>
            </div>

        </div>
    );
}
export default Resources;