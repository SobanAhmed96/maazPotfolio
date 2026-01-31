import React from 'react'
import NavBar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'

import './index.css'
import Services from './Pages/Services'
import Potfolio from './Pages/Potfolio'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <main className="pt-16"> {/* Offset for fixed NavBar */}
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
         <section id="services"><Services /></section>
        <section id="potfolio"><Potfolio /></section>
         <section id="contact"><Contact /></section> 
      </main>
      <Footer />
    </>
  )
}

export default App
