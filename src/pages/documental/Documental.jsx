import React from 'react'
import './documental.css'
import Video from '../../components/video/Video'
import img1 from '/1video.png'
import img2 from '/2video.png'

const Documental = () => {
    return (
        <section className='documental__container'>

            <h2 className='documental__title'>Mira la selección de documentales que preparamos para ti.</h2>

            <Video 
                videoURL={"https://www.youtube.com/watch?v=e0NDXlVbomg&ab_channel=fundaci%C3%B3nsolytierra"}
                videoImg={img1}
            />

            <Video 
                videoURL={"https://www.youtube.com/watch?v=kiYNzHycPno&ab_channel=ColombiaAntigua"}
                videoImg={img2}
            />


        </section>
    )
}

export default Documental