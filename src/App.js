import React from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div className='app'>
      <div className='app-wrapper'>
        <Navbar />
        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
