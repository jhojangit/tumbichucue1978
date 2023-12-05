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
                    <i className='bx bxs-envelope footer__item--i'></i>
                    <br />
                    Universidad del Cauca
                    <br />
                    <span className='footer__item--span'>
                        dyon@unicauca.edu.co
                    </span>
                    <hr />
                </p>

                <p className='footer__item'>
                    <i
                        className='bx bxl-whatsapp bx-md bx-tada footer__item--i'>
                    </i>
                    <br />

                    <a
                        className='footer__item--a'
                        target="_blank"
                        aria-label="Compra por WhatsApp"
                        href="https://wa.me/573216949090?text= ¡Hola! Quisiera saber más sobre Tumbichucue">
                            ¿Tienes preguntas?

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



        </footer>
    )
}

export default Footer