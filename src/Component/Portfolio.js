import React from 'react'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'
import FrontHead from './FrontHead'
import Header from './Header'
import Pages from './Pages'
import ScrollTop from './ScrollTop'
import Service from './Servies'

const Portfolio = () => {
  return (
    <>
    <Header/>
    <FrontHead/>
    <About/>
    <Service/>
    <Pages/>
    <Blog/>
    <ScrollTop/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Portfolio