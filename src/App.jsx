import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import FooterComponent from "./components/FooterComponent"

function App() {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact/>
      <FooterComponent />
    </div>
  )
}

export default App
