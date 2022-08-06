import React from 'react'
import '../css/pages.css'

const Pages = () => {
    return (
        <div className='' id="portfolio">
            <h2 id="Portfolio__Pages">Portfolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam rerum commodi quo repudiandae ratione </p>
            <div className="container">
                <div className="gallery">
                    <figure className="gallery__item gallery__item--1">
                        <img src="../../image/a.avif" alt="Gallery images 1" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--2">
                        <img src="../../image/b.avif" alt="Gallery images 2" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--3">
                        <img src="../../image/c.avif" alt="Gallery images 3" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--4">
                        <img src="../../image/d.avif" alt="Gallery images 4" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--5">
                        <img src="../../image/e.avif" alt="Gallery images 5" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--6">
                        <img src="../../image/f.avif" alt="Gallery images 6" className="gallery__img" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Pages