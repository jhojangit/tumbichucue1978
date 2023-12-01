import React from 'react'
import './album.css'
import { useParams } from 'react-router-dom'
import album from '../../json/photos.json'
import categories from '../../json/categories.json'


const Album = () => {

    const { id } = useParams()


    const photos = album.filter(element => element.categoryId == id)

    console.log(photos);



    return (
        <div>


            <br />
            <br />
            <br />

            {
                photos.map(photo => (
                    <img
                        key={photo.id}
                        src={photo.url} alt=""
                    />
                ))
            }

        </div>
    )
}

export default Album