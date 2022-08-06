import React from 'react'

export const PopUpMessage = () => {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title nav_fonts" id="exampleModalLabel" style={{ 'color': "#FF6A00" }}>Hire Me ?</h5>
                            <button type="button" className="btn bg" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body font_family">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Email</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Company Name</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Company Location</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Roles and Responsibilities</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Job Description</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary shadow-none border-none bg" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary shadow-none border-none bg">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

// for view more option
export const ViewMore = () => {
    return (
        <>
            <div className="modal fade" id="viewid" tabIndex="-1" aria-labelledby="viewexample" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title nav_fonts" id="viewexample" style={{ 'color': "#FF6A00" }}>About Me !</h5>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body font_family alignment">
                            <ul className='p-1 '>
                                <p>Spotify has had a big impact on my daily life since it was released. The application is always running in the background when I train, work or relax. I feel that Spotify always contributes something to my days independently of what I'm currently up to. When I develop I want to feel that I help create a better everyday life for many people, which I believe Spotify does and that's why I'm writing this application.</p>
                                <p>I am a humble developer, I strive to keep my code transparent and easy to understand. To enable more people to be involved in what I create and also question my code. To come up with the best possible solution, I believe that continuous feedback is the key to success and the way to go. I think this fits well in how Spotify describes the way of working, which I believe I could contribute to.

                                </p>
                                <p> When I develop I always strive to make the code more efficient and easy to manage. I'm a doer rather than a questioner when I code, I start by doing and learn from what I observe. I think this will make me fit well in a company like Spotify where you value people who are innovating, taking risks, and where people have no fear of failure.
                                    I would be delighted to discuss the various ways in which I could contribute to your team. I look forward with excitement to hearing from you.</p>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}