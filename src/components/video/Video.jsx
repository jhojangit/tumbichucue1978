import React from 'react'
import './video.css'
const Video = ({videoURL, videoImg}) => {
    return (
        <section className='video__container'>
            <a href={videoURL} target="_blank" rel="noopener noreferrer">
                <img className='video__img' src={videoImg} alt="" />
            </a>
        </section>
    )
}

export default Video