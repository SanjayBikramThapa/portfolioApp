import React from 'react'
import '../css/blog.css'

const Blog = () => {
    return (
        <div className='mt-5' id='blogs_'>
            <h2 className='heading' id='blog'>Blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam rerum commodi quo repudiandae ratione </p>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col-md-4 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='img_height'>
                                <img src='../../image/a.avif' alt='avatar' className='gallery__img'/>
                                </div>
                                <h5 className='card-title blogfonts mt-3'>Card title</h5>
                                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='img_height'>
                                <img src='../../image/b.avif' alt='avatar' className='gallery__img'/>
                                </div>
                                <h5 className='card-title blogfonts mt-3'>Card title</h5>
                                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='img_height'>
                                <img src='../../image/c.avif' alt='avatar' className='gallery__img'/>
                                </div>
                                <h5 className='card-title blogfonts mt-3'>Card title</h5>
                                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='img_height'>
                                <img src='../../image/d.avif' alt='avatar' className='gallery__img'/>
                                </div>
                                <h5 className='card-title blogfonts mt-3'>Card title</h5>
                                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='img_height'>
                                <img src='../../image/e.avif' alt='avatar' className='gallery__img'/>
                                </div>
                                <h5 className='card-title blogfonts mt-3'>Card title</h5>
                                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='img_height'>
                                <img src='../../image/f.avif' alt='avatar' className='gallery__img'/>
                                </div>
                                <h5 className='card-title blogfonts mt-3'>Card title</h5>
                                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Blog