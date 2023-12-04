import React from 'react'
import './footer.css'


const Footer = () => {


    return (


        <footer className='footer__container'>

            <section className='footer__nav'>

                <strong className='footer__title'> 
                    Territorio ancestral de Tumbichucue
                </strong>

                <p className='footer__item'> 
                    <i className='bx bxs-phone-call footer__item--i'></i>
                    <br />
                        Contacto:
                            <br /> 
                        <span className='footer__item--span'>
                            3107050713
                        </span>
                        <hr />
                </p>

                <p className='footer__item'>
                    <i class='bx bxs-envelope footer__item--i'></i>
                    <br />
                        Universidad del Cauca 
                            <br />
                        <span className='footer__item--span'>
                            dyon@unicauca.edu.co
                        </span>
                        <hr />
                </p>

                <p className='footer__item'>
                    <i class='bx bx-question-mark footer__item--i'></i>
                    <br />
                        
                        <a
                        className='footer__item--a'
                        href="https://www.facebook.com/resguardo.tumbichucue"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        ¿Tienes Preguntas? 
                        </a>
                    
                        
                        <hr />
                </p>


                <div className='footer__facebook'>
                    <a
                    className='footer__item--a'
                        href="https://www.facebook.com/resguardo.tumbichucue"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className='bx bxl-facebook bx-sm'> </i>
                    </a>
                </div>




            </section>

            <section className='footer__developer'>
                
                <strong className='footer__developer--strong'>
                    Desarrollado por:
                </strong>

                <br />

                <a  
                    className='footer__item--a'
                    href="https://portfoliojhojan.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    Jhojan R.G
                </a>



            </section>


        </footer>
    )
}

export default Footer