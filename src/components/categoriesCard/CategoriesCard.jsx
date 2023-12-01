import React from 'react'
import './categoriesCard.css'
import { useNavigate } from 'react-router-dom'


const CategoriesCard = ({category}) => {

  const navigate = useNavigate()

  const handleLink = (id) => {
    navigate(`/album/${id}`)
  }


  return (
    <section className='categoryCard__container'>
        <h3 className='categoryCard__title'>
            {category.title}
        </h3>

        <div className='categoryCard__img'>
            <img  src={category.url} alt={category.title} />
        </div>

        <button onClick={() => handleLink(category.id)  } className='categoryCard__btn'>
            Ver galeria
        </button>

    </section>
  )
}

export default CategoriesCard