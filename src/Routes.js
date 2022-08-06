import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InputForm from './Component/InputForm'
import Portfolio from './Component/Portfolio'
import {Signin} from './Component/Signin'

const RouteModule = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Portfolio/>} />
            <Route path="/login" element={<Signin/>} />
            <Route path="/input" element={<InputForm/>} />
        </Routes>

    </Router>
  )
}

export default RouteModule