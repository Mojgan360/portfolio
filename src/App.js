import React from 'react'

import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'

import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Portfolio from './components/pages/Portfolio'
import About from './components/pages/About'

import Footer from './components/layouts/Footer'
import PositionSe from './components/pages/PositionSe'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <PositionSe />

      <Footer />
    </React.Fragment>
  )
}

export default App
