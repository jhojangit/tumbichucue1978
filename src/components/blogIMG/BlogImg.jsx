import React from 'react'
import './blogImg.css'


const BlogImg = ({img, description, fuente, title, date=null}) => {


    return (
        <div className='blogPage__img'>

            

            <img src={img} alt="Imagen 1" />

            <p className='blog__page--title font'>
                {title}
            </p>
            <p className='blog__page--fuente font'>
                {fuente}
            </p>

            <p className='blog__page--date font'>
                {date}
            </p>

            <p className='blog__page--description font'>
                {description}
            </p>
        </div>
    )
}

export default BlogImg