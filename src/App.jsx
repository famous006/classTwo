import React from 'react'
import NewSection from '../components/NewSection'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Cardsection from '../components/Cardsection'
import Footer from '../components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import { Navigate, Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Api from './pages/Api'
import Formik from './pages/Formik'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const App = () => {
  let token = localStorage.token
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={token?<Herosection/>:<Navigate to='/signin'/>}/>
        <Route path='/my-about' element={<About/>}/>
        <Route path='about' element={<Navigate to='/my-about'/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/api' element={<Api/>}/>
        <Route path='/formik' element={<Formik/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
    {/* <Herosection/> */}
    {/* <Cardsection/> */}
    {/* <Footer/> */}
    {/* <NewSection/> */}
    </>
  )
}

export default App