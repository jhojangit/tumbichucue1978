import React from 'react'
import './video.css'
const Video = ({videoURL}) => {
    return (
        <div className='video__container'>
            <iframe 
                src={videoURL}
                width="100%" 
                height="315" 
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture;
                    web-share"
                allowfullscreen>
            </iframe>
        </div>
    )
}

export default Video