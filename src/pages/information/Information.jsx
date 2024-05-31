import React from 'react'
import './information.css'
import BlogImg from '../../components/blogIMG/BlogImg'
import img_contexto_geografico_descripcion from '/img_contexto_geografico_descripcion.gif'




const Information = () => {
  return (

    <section className='information__container'>

      <h2 className='information__title'>Constitución del Resguardo de Tumbichucue en el marco de la R. A INCORA 1978</h2>

      <h4 className='information__subtitle'>
        Contexto Geográfico del Resguardo Ancestral de Tumbichucue
      </h4>

      <BlogImg
        img={img_contexto_geografico_descripcion}
        fuente={"Blogger. Tumbichucue (Fortalecimiento de la Lengua Nasa Yuwe)"}
        date={"2010"}
      />

      <p className='information__text'>
        El Resguardo Indígena de Tumbichucue se encuentra al norte del municipio de Inzá, en el departamento del Cauca, Colombia. Está ubicado en la región de Tierradentro, a una distancia de aproximadamente 31 km de la cabecera municipal de Inzá. Esta zona tiene una temperatura promedio que varía entre 17⁰ a 22⁰ C, con una altitud máxima de 2200 metros sobre el nivel del mar. El resguardo es considerado uno de los más importantes para la cultura Páez y es el más reciente de los títulos coloniales que datan del siglo XVIII. En términos administrativos, limita al oriente con el resguardo de Calderas, al occidente con el resguardo de Yaquiva, al norte con el resguardo de Lame (en el municipio de Páez), y al sur con el resguardo de San Andrés de Pisimbala. Además, se divide en 7 sectores: Centro, Pueblo Nuevo, El Salado, Montaña, Boquerón, La Palma y El Naranjal. 
      </p>


      <h3>LÍNEA DE TIEMPO DE LOS GOBERNADORES 1960 A 1980</h3>

      <ol>
        <li>Jorge Fernández 1968</li>
        <li>Cruz Díaz 1969</li>
        <li>José María 1970</li>
        <li>Pedro Fernández 1971</li>
        <li>Avelino Pastuso 1972</li>
        <li>Adán Pame 1973</li>
        <li>José María Pacho 1974</li>
        <li>Avelino Iquira 1975</li>
        <li>Julián Puchicue 1976</li>
        <li>Rafael Díaz 1977</li>
        <li>Jorge Fernández 1978</li>
        <li>Santiago Caliz 1979</li>
        <li>Avelino Iquira 1980</li>
        <li>José María Cuscue 1981</li>
      </ol>
    </section>
  )
}

export default Information