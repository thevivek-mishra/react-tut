import React from 'react'


import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header.jsx'

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
