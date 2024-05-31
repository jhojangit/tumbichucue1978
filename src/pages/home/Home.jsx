import React, { useEffect } from 'react'
import './home.css'

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, []);
    return (
        <section className='home__container'>

            <section className='home__title'>
                <h1>Tumbichucue: La historia revelada en fotografías</h1>
            </section>

            
        </section>
    )
}

export default Home