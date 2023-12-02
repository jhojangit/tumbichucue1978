import React, { useState } from 'react';
import './albumCard.css';

const AlbumCard = ({ photo }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const photoTitle = photo.title.charAt(0).toUpperCase() + photo.title.slice(1).replaceAll("_", " ")

    return (
        <div className={`albumCard__container ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
            <div className='albumCard__content'>
                <div className='albumCard__img'>
                    <img
                        loading='lazy'
                        src={photo.url}
                        alt={photo.title}
                        className={isExpanded ? 'fullScreen' : ''}
                    />
                </div>
                {isExpanded && (
                        <p className='albumCard__text'>{photoTitle}</p>
                )}
            </div>
        </div>
    );
};

export default AlbumCard;
