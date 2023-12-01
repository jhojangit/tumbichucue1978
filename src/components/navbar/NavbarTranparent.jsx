import React, { useEffect, useState } from 'react'
import './navbarTransparent.css'
import { Link } from 'react-router-dom'


const NavbarTransparent = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isHome, setIsHome] = useState(true)
    const [changeRoute, setChangeRoute] = useState(false)




    useEffect(() => {
        const path = window.location.href
        
        path.endsWith("#/home")? setIsHome(true): setIsHome(false)

        
        setChangeRoute(false)

    }, [changeRoute]);


    const handleChangeRoute = () => {
        setChangeRoute(true)
        setIsOpenMenu(!isOpenMenu)
    }


    const handleMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }


    return (

            <section className='navbar__transparent--container'>



                <div 
                    onClick={handleMenu}
                    className='navbar__transparent--menu'>
                    <i className='bx bx-menu bx-md'></i>
                </div>


                <div
                    className={`navbar__transparent--options ${isOpenMenu? "options__open" : ""}`}>

                    <i 
                        onClick={handleMenu}
                        className='bx bx-x bx-lg navbar__transparent--optionsClose'>
                    </i>




                    <ul className='navbar__transparent--ul'>
                        {
                            isHome 
                            ? 
                            ""
                            :
                            <li onClick={handleChangeRoute} className='navbar__transparent--li' > <Link to="/home">INICIO</Link> </li>
                            
                        }
                        
                        <li > <Link onClick={handleChangeRoute} className='navbar__transparent--li' to="/information">INFORMACIÓN</Link> </li>
                        <li > <Link onClick={handleChangeRoute} className='navbar__transparent--li' to="/fotografia">FOTOGRAFÍA</Link> </li>
                        <li > <Link onClick={handleChangeRoute} className='navbar__transparent--li' to="/documental">DOCUMENTAL</Link> </li>
                        <li > <Link onClick={handleChangeRoute} className='navbar__transparent--li' to="/blog">BLOG</Link> </li>
                        <li > <Link onClick={handleChangeRoute} className='navbar__transparent--li' to="/blog">MÁS</Link> </li>
                    </ul>


                </div>

            </section>
    )
}

export default NavbarTransparent