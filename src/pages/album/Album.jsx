import React, { useState } from 'react'
import './album.css'
import { useParams } from 'react-router-dom'
import album from '../../json/photos.json'
import categories from '../../json/categories.json'
import AlbumCard from '../../components/albumCard/AlbumCard'
import ReactPaginate from 'react-paginate';




const Album = () => {

    const { id } = useParams()


    const photos = album.filter(element => element.categoryId == id)
    const category = categories.filter(element => element.id == id)



    const itemsPerPage = 6

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = photos.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(photos.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % photos.length;
        setItemOffset(newOffset);
        window.scrollTo({top: 0, behavior: 'smooth'})
    };




    return (
        <div className='album__container'>

            <h2 className='album__description--title' >{category[0].title}</h2>

            <p className='album__description--description'>{category[0].description}</p>



            <div className='album__gallery--container'>
                {currentItems &&
                    currentItems.map((photo) => (
                        <div div key={photo.url}>
                        <AlbumCard photo={photo} />
                    </div>
                    ))}
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}

                marginPagesDisplayed = {2}
                containerClassName="paginate__pagination--container"
                breakLinkClassName = "paginate__pagination--break"
                pageClassName="paginate__pagination--li"
                pageLinkClassName="paginate__pagination--page"
                activeLinkClassName="paginate__pagination--active"
                activeClassName="paginate__pagination--activeTransparent"
                previousLinkClassName	="paginate__pagination--next-previous"
                nextLinkClassName="paginate__pagination--next-previous"
                disabledLinkClassName="paginate__pagination--disabled"
            />

        </div>
    )
}

export default Album