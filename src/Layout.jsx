import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './Context/ColorContex'


function Layout() {
  return (
    <UserContextProvider>
    
        <Header/>
        <Outlet/>
        <Footer/>
    </UserContextProvider>
  )
}

export default Layout