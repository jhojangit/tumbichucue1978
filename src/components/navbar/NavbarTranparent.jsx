import React, { useEffect, useState } from 'react'
import './navbarTransparent.css'
import { Link, useNavigate } from 'react-router-dom'


const NavbarTransparent = () => {

    const navigate = useNavigate()

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


    const handleOptions = (option) => {
        navigate(option.target.value)
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

                        
                        
                        <select name="options" onChange={handleOptions}>
                            <option value="mas" disabled  selected>MÁS</option>
                            <option value="/fotografia">Option 1</option>
                            <option value="/fotografia">Option 2</option>
                            <option value="/fotografia">Option 3</option>
                            <option value="/fotografia">Option 4</option>
                            <option value="/fotografia">option 5</option>
                        </select>

                    </ul>


                </div>

            </section>
    )
}

export default NavbarTransparent