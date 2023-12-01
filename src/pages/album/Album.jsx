import React, { useState } from 'react'
import './album.css'
import { useParams } from 'react-router-dom'
import album from '../../json/photos.json'
import categories from '../../json/categories.json'
import AlbumCard from '../../components/albumCard/AlbumCard'




const Album = () => {

    const { id } = useParams()


    const photos = album.filter(element => element.categoryId == id)
    const category = categories.filter(element => element.id == id)


    return (
        <div className='album__container'>

                    <h2 className='album__description--title' >{category[0].title}</h2>

                    <p  className='album__description--description'>{category[0].description}</p>



                <div className='album__gallery--container'>
                {photos.map((photo) => (
                    <div div  key={photo.url}>
                        <AlbumCard photo={photo}/>
                    </div>
                ))}
                </div>

        </div>
    )
}

export default Album