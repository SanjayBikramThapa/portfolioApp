import React from 'react'
import "../css/about.css"

const About = () => {
  return (
    <>
      <div className='about_background d-sm-block d-lg-flex margin p-5' id='about'>
        <div className='col-sm-12 col-lg-6'>
          <h2 className='margin_left' id="aboutMe">ABOUT ME</h2>
          <p className='alignment p-3'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio atque ab saepe dolorem! Enim quam, atque nostrum sint cum commodi quis doloremque officiis, fuga itaque veniam. Placeat optio fugiat id!, Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
          Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua.</p>
          <div id='front_button'>
        <button type="button" className="btn shadow-none me-5" data-bs-toggle="modal" data-bs-target="#viewid">About Me</button>
        </div>
        </div>
        <div className='col-sm-12 col-lg-6'>
          <img src='../../image/about.webp' alt='no images'></img>
        </div>
      </div>
    </>
  )
}

export default About