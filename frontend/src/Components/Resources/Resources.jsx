import React from 'react';
import './Resources.css';
import Youtube from "../../assets/youtube.svg"
import Drive from '../../assets/drive.svg'
import Documnet from '../../assets/document.svg'

const Resources = ({ externalResources }) => {
    // Helper to render a box for external links
    const renderExternalBox = (icon, title, links) => (
        <div className='box'>
            <div className='hover'></div>
            <div className='header-box'>
                <img src={icon} alt={title} className='icon' />
                <span className='text'>{title}</span>
            </div>
            <div className='links'>
                <ul>
                    {links && links.length > 0 ? (
                        links.map((linkObj, idx) => (
                            <li key={idx}>
                                <a href={linkObj.link} target='_blank' rel='noopener noreferrer'>
                                    {linkObj.title}
                                </a>
                            </li>
                        ))
                    ) : (
                        <li>No links available</li>
                    )}
                </ul>
            </div>
        </div>
    );

    // Gather all external links by type
    let youtubeLinks = [], driveLinks = [], otherLinks = [];
    if (externalResources && externalResources.length > 0) {
        externalResources.forEach(ext => {
            if (ext['Youtube-links']) youtubeLinks = youtubeLinks.concat(ext['Youtube-links']);
            if (ext['Drive-links']) driveLinks = driveLinks.concat(ext['Drive-links']);
            if (ext['Other-links']) otherLinks = otherLinks.concat(ext['Other-links']);
        });
    }

    return (
        <div className='container'>
            <div className='Boxs'>
                {/* Render only external resource boxes */}
                {youtubeLinks.length > 0 && renderExternalBox(Youtube, 'YouTube Links', youtubeLinks)}
                {driveLinks.length > 0 && renderExternalBox(Drive, 'Drive Links', driveLinks)}
                {otherLinks.length > 0 && renderExternalBox(Documnet, 'Other Links', otherLinks)}
            </div>
        </div>
    );
}
export default Resources;