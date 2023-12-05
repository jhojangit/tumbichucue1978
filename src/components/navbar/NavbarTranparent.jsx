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


        if(option.target.value === "/pdf"){
            navigate(option.target.value)
            setIsOpenMenu(!isOpenMenu)
        }

        if(option.target.value === "lame"){
            window.open("https://drive.google.com/file/d/1iGhOrbAvlvwurfVtzvFz755Wtz1sIHNw/view?usp=sharing", "_blank");
            setIsOpenMenu(!isOpenMenu)
        }

        if(option.target.value === "calderas"){
            window.open("https://drive.google.com/file/d/1exqTL8Mn7ShoQbRUmYUx4zYlXlRJFhLH/view?usp=sharing", "_blank");
            setIsOpenMenu(!isOpenMenu)
        }

        if(option.target.value === "guanas"){
            window.open("https://drive.google.com/file/d/1lwV5NG0cJpxKbY7FX2Qh7eGlQ150xaD3/view?usp=sharing", "_blank");
            setIsOpenMenu(!isOpenMenu)
        }

        if(option.target.value === "tumbichucue"){
            window.open("https://drive.google.com/file/d/1yEFsddxYszHRL6YqCJUwLnj5cu6jvQt9/view?usp=sharing", "_blank");
            setIsOpenMenu(!isOpenMenu)
        }


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
                            <option value="/pdf">Lecturas en PDF</option>
                            <option value="lame">Colonial de Lame 1905</option>
                            <option value="calderas">Colonial de Calderas 1914</option>
                            <option value="tumbichucue">Territorio de Tumbichucue 1978</option>
                            <option value="guanas">Cédula real de Guanas</option>
                        </select>

                    </ul>


                </div>

            </section>
    )
}

export default NavbarTransparent