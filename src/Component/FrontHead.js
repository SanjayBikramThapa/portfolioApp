import React,{useState} from 'react'
import "../css/frontHeader.css"
import { getContent } from '../pages'
import InputForm from './InputForm'
import { ViewMore, PopUpMessage } from './PopUpMessage'
const FrontHead = () => {
  const[show,setShow]=useState()

  const loadContent = async () =>{
      const data =   await getContent()
      console.log("this is data",data)
      if(data.status === "error"){
          setShow(data.message)
      }
      else{
          setShow(data.message)
      }
  }
  return (
    <div>
      <div className="d-sm-block d-md-flex" id='frontHead'>
        <div className="col">
          <div className='frontHeader'>
            <img src="../../image/mans.webp" alt="" />
          </div>
        </div>
        <div className="col mt-5 mb-3">
          <div className="col d-flex align-items-center">
            <div className='ps-5 text-start'><p className='fonts_frontHead pt-5'>I'm Mern Stack Developer</p><span className='fonts_frontHead'>Sanjay Bikram Thapa</span></div>
          </div>
          <div className='text-start ps-5'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam rerum commodi quo repudiandae ratione suscipit sapiente nihil! Id animi veritatis maxime repudiandae, sit a sapiente eligendi vitae dicta beatae.Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
            Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua.</p></div>
          <div className='d-flex justify-content-center mt-5' id="front_button">
            <button type="button" className="btn shadow-none me-5 bg" data-bs-toggle="modal" data-bs-target="#exampleModal">Hire Me</button>
            <button type="button" className="btn shadow-none bg" data-bs-toggle="modal" data-bs-target="#inputform">Update</button>

            <PopUpMessage />
            <ViewMore />
            <InputForm/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FrontHead