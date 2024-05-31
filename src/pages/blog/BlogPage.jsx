import React, { useEffect } from 'react'
import './blogPage.css'
import BlogImg from '../../components/blogIMG/BlogImg'

import img0 from '/blog/Imagen0.jpg'
import img1 from '/blog/Imagen1.jpg'
import img2 from '/blog/Imagen2.png'
import img3 from '/blog/Imagen3.png'
import img4 from '/blog/Imagen4.jpg'
import img45 from '/blog/Imagen45.jpg'
import img5 from '/blog/Imagen5.jpg'
import img6 from '/blog/Imagen6.jpg'
import img7 from '/blog/Imagen7.jpg'
import img8 from '/blog/Imagen8.jpg'
import img85 from '/blog/Imagen85.jpg'
import img9 from '/blog/Imagen9.jpg'
import img95 from '/blog/Imagen95.jpg'
import img10 from '/blog/Imagen10.jpg'
import img11 from '/blog/Imagen11.png'





const BlogPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, []);
    return (
        <section className='blogPage__container'>

            <div id='progress'></div>

            <h3 className='blogPage__title--main'>
                Resguardo Indígena de Tumbichucue - Cauca
            </h3>

            <BlogImg
                img={img0}
                description={""}
                title={"Imagen 1: Contexto Geográfico del Resguardo de Tumbichucue"}
                fuente={'Red de la Minga'}
                date={"Año: 2021"}
            />


            <BlogImg
                img={img1}
                description={""}
                title={"Imagen 2: Resguardo de Tumbichucue en la Actualidad"}
                fuente={'Jhon Eddy Díaz'}
                date={"Año: 2021"}
            />




            <p className='blogPage__text'>
                El Resguardo Indígena de Tumbichucue, ubicado en Colombia, tiene una historia que se remonta a tiempos precolombinos. Durante la colonización española, fue escenario de conflictos y resistencia indígena. Con el tiempo, se reconocieron los derechos y la autonomía de estas comunidades, resultando en la creación de resguardos como Tumbichucue.
                <br />
                <br />
                Este resguardo ha sido crucial para la preservación de la identidad cultural, la organización comunitaria y la gestión sostenible de los recursos naturales. A lo largo de los años, las comunidades han luchado por sus derechos, enfrentando desafíos como la explotación de recursos y conflictos territoriales.
                <br />
                <br />
                Geográficamente, Tumbichucue limita con otros resguardos indígenas, y el 8 de marzo de 1978, con la ayuda de líderes locales y el antropólogo Elías Sevilla, se logró su reconocimiento legal como el primer resguardo reconocido bajo el sistema republicano en Colombia, gracias al apoyo del Incoder y la Oficina de Asuntos Indígenas del Ministerio del Interior.
                <br />
                <br />
            </p>


            <BlogImg
                img={img2}
                description={"Secretario de los años 60"}
                title={"Imagen 3: Don Lisandro Yugue."}
                fuente={'Cabildo Tumbichucue'}
                date={""}
            />

            <BlogImg
                img={img3}
                description={"Primer Capitán de la vereda de Tumbichucue (Calderas y Lame)"}
                title={"Imagen 4: Don Calixto Pame."}
                fuente={'Cabildo de Tumbichucue'}
                date={""}
            />


            <BlogImg
                img={img45}
                description={"Primer Gobernador Interino del resguardo de Tumbichucue 1968"}
                title={"Imagen 5: Jorge Fernández (Gobernador 1968)"}
                fuente={'Mauricio Puertas'}
                date={"Año: 2020"}
            />


            <BlogImg
                img={img4}
                description={""}
                title={"Imagen 6: José Cruz Díaz (1969 Gobernador Principal)"}
                fuente={'Cabildo de Tumbichucue'}
                date={""}
            />


            <BlogImg
                img={img5}
                description={""}
                title={"Imagen 7: José Adán Pame Fernández (1973 Gobernador Principal)"}
                fuente={'Jhon Eddy Díaz'}
                date={"Año: 2021"}
            />


{/*             <ul className='blogPage__ul'>
                <li className='blogPage__li'>José María Iquira (1970)</li>
                <li className='blogPage__li'>Pedro Fernández Puchicue (1971)</li>
                <li className='blogPage__li'>Avelino Pastuso (1972)</li>
                <li className='blogPage__li'>José María Pacho Díaz (1974)</li>
                <li className='blogPage__li'>Avelino Iquira (1975)</li>
                <li className='blogPage__li'>Julián Puchicue Yonda (1976)</li>
                <li className='blogPage__li'>Rafael Díaz Pacho (1977)</li>
                <li className='blogPage__li'>Jorge Fernández Puchicue (1978)</li>
                <li className='blogPage__li'>Santiago Calix (1979)</li>
                <li className='blogPage__li'>Avelino Iquira (1980) </li>
            </ul> */}



            <BlogImg
                img={img85}
                description={""}
                title={"Imagen 8: Julián Puchicue Yonda (1976 Gobernador Principal)"}
                fuente={'Jhon Eddy Díaz'}
                date={"Año: 2023"}
            />


            <BlogImg
                img={img95}
                description={""}
                title={"Imagen 9: Rafael Díaz Pacho(1977 Gobernador Principal)"}
                fuente={'Yaid Díaz Bolaños'}
                date={"Año: 2021"}
            />



            <p className='blogPage__text'>
                La población de Tumbichucue mantiene sus ancestrales usos y costumbres a través de festividades, rituales y ceremonias tradicionales, destacando la flauta y la tambora. Los Diálogos de Flautas y Tambores de los Andes, celebrados en agosto, son eventos clave para preservar y compartir esta música, fortaleciendo los lazos comunitarios. Estas festividades reafirman la identidad cultural y honran las raíces ancestrales, conectando generaciones presentes con su legado histórico. Además, sirven como plataformas de intercambio cultural, resaltando la diversidad y el valor de las tradiciones indígenas en la región andina. 

                <br />
                <br />
            
            </p>


            <BlogImg
                img={img6}
                description={""}
                title={"Imagen 10. Luis Pastuso (Músico)"}
                fuente={'anónima'}
                date={""}
            />


            <BlogImg
                img={img11}
                description={""}
                title={"Imagen 11. Don Miguel Iquinas (Primer músico Flautero)"}
                fuente={'Yaid Ferley Bolaños'}
                date={""}
            />

            <p className='blogPage__text'>
                Según los mayores de la comunidad, la música traversa se originó en Tumbichucue, específicamente en la Familia Iquinas en el sector del Salado, al pie del Cerro del Tesoro. Esta música, inspirada por los sonidos de la naturaleza, se difundió inicialmente en las festividades de Calderas en la década de los 60. La tradición oral apoya este relato, destacando la música traversa como una expresión cultural significativa. Su difusión desde Tumbichucue a Calderas resalta los vínculos históricos y culturales entre las comunidades indígenas y la importancia de sus interacciones en el desarrollo de expresiones culturales únicas.
                <br />
                <br />

            </p>


            <BlogImg
                img={img7}
                description={""}
                title={"Imagen 12: Sat US Díaz (Celebración de Flautas y Tambores)"}
                fuente={"Yaid Ferley Bolaños"}
                date={"Año 2020"}
            />

            <p className='blogPage__text'>
            La riqueza cultural de Tumbichucue se manifiesta en sus prácticas musicales tradicionales y en la preservación de diversas artesanías, especialmente los tejidos. Las mujeres indígenas son expertas en crear tejidos tradicionales, bateas y ruanas, que son fundamentales para la identidad cultural y la economía local. Estas habilidades, transmitidas de generación en generación, no solo mantienen viva la cultura ancestral, sino que también proporcionan ingresos vitales para muchas familias.
                <br />
                <br />
            </p>


            <BlogImg
                img={img8}
                description={""}
                title={"Imagen 13: Mujer tejedora agustina"}
                fuente={'Yaid Ferley Bolaños Díaz'}
                date={"Año 2021"}
            />




            <p className='blogPage__text'>
            Las mujeres de Tumbichucue han sido cruciales en la promoción de la autonomía y preservación de la identidad cultural. Destacamos a la primera mujer líder del resguardo, cuya valentía la convierte en un ejemplo notable de resistencia, similar a la cacica Gaitana. Estas mujeres han resistido la opresión, preservado tradiciones, y liderados esfuerzos para fortalecer la autonomía y participación femenina en la comunidad. Sus contribuciones inspiran a futuras generaciones y marcan un legado de empoderamiento y liderazgo femenino. La historia y relatos orales resaltan su influencia en la consolidación y preservación de la identidad cultural y el fortalecimiento comunitario.
                <br />
            </p>


            <BlogImg
                img={img9}
                description={""}
                title={"Imagen 14: Josefina Díaz gobernadora 2002"}
                fuente={'Yaid Ferley Bolaños Díaz'}
                date={"Año 2020"}
            />



            <p className='blogPage__page--textFinal'>
            “El Resguardo Indígena de Tumbichucue es un espacio sagrado donde la cosmogonía y filosofía ancestral se entrelazan, honrando la conexión profunda entre la tierra, el cielo y sus habitantes. Aquí, la vida fluye en armonía con los ritmos naturales, y la sabiduría de los ancestros guía cada paso, recordándonos que somos parte de un todo mayor. Tumbichucue es un testimonio vivo de resistencia, donde la identidad y el espíritu comunitario se fortalecen a través de rituales, tradiciones y el cuidado de la Madre Tierra.” Díaz, Jhon 2023. 
            </p>


            <div className='blogPage__final'>

                <h5 className='blogPage__pay'>
                    ¡Pay!
                </h5>
            </div>

        </section>
    )
}

export default BlogPage