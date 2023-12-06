import React, { useEffect } from 'react'
import './home.css'

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, []);
    return (
        <section className='home__container'>

            <section className='home__title'>
                <h1>Constitución del Resguardo de Tumbichucue en el marco de la R. A INCORA 1978</h1>
            </section>

            
        </section>
    )
}

export default Home