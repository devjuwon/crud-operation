import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layouts = () => {
  return (
   <>
   <Navbar/>
  <main>
    <Outlet/>
  </main>
  <Footer/>
   </>
   
  )
}

export default Layouts
