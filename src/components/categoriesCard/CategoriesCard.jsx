import React from 'react'
import './categoriesCard.css'


const CategoriesCard = ({category}) => {


  return (
    <section className='categoryCard__container'>
        <h3 className='categoryCard__title'>
            {category.title}
        </h3>

        <div className='categoryCard__img'>
            <img  src={category.url} alt={category.title} />
        </div>

        <button className='categoryCard__btn'>
            Ver galeria
        </button>

    </section>
  )
}

export default CategoriesCard