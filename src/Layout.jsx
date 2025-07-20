import React from 'react'
import Navbar from './assets/components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer/Footer'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
 </>
  )
}

export default Layout
