import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Basket from './pages/basket/Basket'
import Clothes from './pages/clothes/Clothes'
import Donate from './pages/donate/Donate'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import NotFound from './pages/notFound/NotFound';
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import ProtectedRoute from './routes/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
        </Route>
        
        <Route element={<MainLayout/>}>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />

          <Route element={<ProtectedRoute />}>
            <Route path='/basket' element={ <Basket /> } />
            <Route path='/clothes' element={ <Clothes /> } />
            <Route path='/donate' element={ <Donate /> } />
          </Route>
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App