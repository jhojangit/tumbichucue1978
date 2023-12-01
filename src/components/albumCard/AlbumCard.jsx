import React from 'react'
import './albumCard.css'

const AlbumCard = ({photo}) => {

  return (


    <div className='albumCard__container'>
{/*         
        <strong className='albumCard__title'>
            {photo.title}
        </strong> 
*/}

        <div className='albumCard__img'>
            <img loading='lazy' src={photo.url} alt={photo.title} />
        </div>

    </div>
  )
}

export default AlbumCard