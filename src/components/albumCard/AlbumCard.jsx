import React, { useState } from 'react';
import './albumCard.css';

const AlbumCard = ({ photo }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

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
                        <p className='albumCard__text'>{photo.title}</p>
                )}
            </div>
        </div>
    );
};

export default AlbumCard;
