import React from 'react'
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import { Outlet } from 'react-router-dom'
import { Children } from 'react'

const MainLayout = () => {
  return (
    <>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}

export default MainLayout