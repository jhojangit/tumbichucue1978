import React from 'react'
import './pdfDocument.css'
import pdfLogo from '/pdfLogo.webp'


const PdfDocument = ({url, title}) => {
    return (
        <div className='pdfDocument__container'>

            <div className='pdfDocument__img--container'>
                <a className='pdfDocument__img--a' href={url} target="_blank" rel="noopener noreferrer">
                    <img  className='pdfDocument__img--img' src={pdfLogo} alt="Logo PDF" />
                </a>
            </div>

            <strong className='pdfDocument__text'>
                {title}
            </strong>
        </div>
    )
}

export default PdfDocument