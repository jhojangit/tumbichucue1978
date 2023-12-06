import React, { useEffect } from 'react'
import './pdf.css'
import PdfDocument from '../../components/pdfDocument/PdfDocument'


const Pdf = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, []);
    return (
        <section className='pdf__container'>

            <h2>TEXTOS SOBRE LA HISTORIA DE LOS PAECES</h2>

            <section className='pdf__content'>

                <PdfDocument
                    title={"Capillas doctrineras de tierra dentro"}
                    url={"https://drive.google.com/file/d/1fHv7cKwJQ6C8tsVfbo7Ylu_lSxI4gb5o/view?usp=drive_link"}
                />

                <PdfDocument
                    title={"El genocidio de los Paeces"}
                    url={"https://drive.google.com/file/d/1klIui2UQ0fml4I55sc_tqEhQRX88YqW-/view?usp=sharing"}
                />
                <PdfDocument
                    title={"Economía de los Páez"}
                    url={"https://drive.google.com/file/d/1obWAJHdj3KPa2CJrVdUUGRZMb7wryBhm/view?usp=sharing"}
                />
                <PdfDocument
                    title={"El mito de los quince negros"}
                    url={"https://drive.google.com/file/d/10DBuy79Yzr2VjX7E9q02onuI6Tga_AWi/view?usp=sharing"}
                />
                <PdfDocument
                    title={"El tesoro de Tumbichucue"}
                    url={"https://drive.google.com/file/d/1E0X9dXAsD1wUao7vsyNwvl61Ith-GIG2/view?usp=sharing"}
                />
                <PdfDocument
                    title={"Estudios de Tierradentro"}
                    url={"https://drive.google.com/file/d/19wxk1bYHJqRbu1IFOdsdGHUs31tHw3ej/view?usp=sharing"}
                />
                <PdfDocument
                    title={"Jaime Morales Divi de resguard"}
                    url={"https://drive.google.com/file/d/1e4_8rT2QyVS8MQOwbDM9IyfUgu8BSgyl/view?usp=sharing"}
                />
                <PdfDocument
                    title={"La base de la sociedad apellidos Páez"}
                    url={"https://drive.google.com/file/d/1THJahKfv7DSceHgvvlPKmxqFk1P4rcMn/view?usp=sharing"}
                />
                <PdfDocument
                    title={"La economia de los excluidos en un Resguardo Indígena"}
                    url={"https://drive.google.com/file/d/1RMJogv3LUapilxeUctcdlqpzapw19o39/view?usp=sharing"}
                />
                <PdfDocument
                    title={"La utopia mueve montañas Francisco Beltran"}
                    url={"https://drive.google.com/file/d/1pMDOePFAmcyqX2I1c6QVCEcXkz0SuZbP/view?usp=sharing"}
                />
                <PdfDocument
                    title={"Ley 89 de 1890"}
                    url={"https://drive.google.com/file/d/1nJk1Z3Vl5CDS6JqAnXQxMMWFSv-asp-7/view?usp=sharing"}
                />
                <PdfDocument
                    title={"Medicina y magia de los Paeces"}
                    url={"https://drive.google.com/file/d/1ITaXSRF1ShkRlpA3lW4rOeeY8wcZNOUv/view?usp=sharing"}
                />
                <PdfDocument
                    title={"Metodología e historia desde rapaport"}
                    url={"https://drive.google.com/file/d/1r7xUhX4ssEWCZJfLAL6jtC1H6KJZBtKD/view?usp=sharing"}
                />
                <PdfDocument
                    title={"Política de la provincia de Páez"}
                    url={"https://drive.google.com/file/d/1FjW0r7VXN44birBPP49lC20f6-ooug0k/view?usp=sharing"}
                />
                <PdfDocument
                    title={"Territorio Ignoto R Quintero Nieto"}
                    url={"https://drive.google.com/file/d/1CjJwO29Ydl9mfrdTKg1GbOaITXffax23/view?usp=sharing"}
                />
                <PdfDocument
                    title={"Territorio y economía Páez"}
                    url={"https://drive.google.com/file/d/1Yc0qSaA01PZe6IASezljpw1WNb9RhKPh/view?usp=sharing"}
                />
                <PdfDocument
                    title={"Victor Bonilla. Historia y politica de los paeces"}
                    url={"https://drive.google.com/file/d/1EF_YyJM18NSZkZPgusB5SxqoZr2qxcJZ/view?usp=sharing"}
                />

            </section>

        </section>
    )
}

export default Pdf