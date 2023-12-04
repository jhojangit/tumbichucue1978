import React from 'react'
import './documental.css'
import Video from '../../components/video/Video'

const Documental = () => {
    return (
        <section className='documental__container'>

            <h2>Mira los documentales que preparamos para ti</h2>

            <Video videoURL={"https://www.youtube.com/embed/e0NDXlVbomg?si=zWlid4_oHECPwWyX"}/>
            <Video videoURL={"https://www.youtube.com/embed/kiYNzHycPno?si=cQvTrx9SzD9Ds2Uw"}/>

        </section>
    )
}

export default Documental