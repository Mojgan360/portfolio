import React from 'react'

import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'

import Navbar from './components/layouts/Navbar'

import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Home />
      <Resume />
      <Portfolio />
      <Contact />
    </React.Fragment>
  )
}

export default App
