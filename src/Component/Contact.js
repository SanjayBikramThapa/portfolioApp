import React from 'react'
import '../css/contact.css'
import { ContactForm } from './ContactForm'

const Contact = () => {
  return (
    <div className='mt-5' id='contact'>
    <div className='d-sm-block d-lg-flex'>
    <div className='container col-sm-12 col-lg-6'>
    <h2 className='heading text-center ps-5'  id='contactMe'>Contact</h2>
        <p className='text-start ps-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio atque ab saepe dolorem! Enim quam, atque nostrum sint cum commodi quis doloremque officiis, fuga itaque veniam.</p>
        <ContactForm/>
    </div>
        <div className='col-sm-12 col-lg-6'>
          <img src='../../image/contact.webp' alt='no contact icon'/>
        </div>
    </div>
    </div>
  )
}

export default Contact