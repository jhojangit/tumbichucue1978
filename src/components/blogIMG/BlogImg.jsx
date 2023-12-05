import React from 'react'
import './blogImg.css'


const BlogImg = ({img, description, fuente, title}) => {


    return (
        <div className='blogPage__img'>
            <p className='blog__page--description font'>
                {description}
            </p>
            

            <img src={img} alt="Imagen 1" />

            <p className='blog__page--title font'>
                {title}
            </p>
            <p className='blog__page--fuente font'>
                {fuente}
            </p>
        </div>
    )
}

export default BlogImg