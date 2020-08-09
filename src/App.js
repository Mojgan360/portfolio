import React from 'react'
import { HashRouter, NavLink, Switch, Route } from 'react-router-dom'

import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'

import Navbar from './components/layouts/Navbar'

import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <Switch>
        <Route exact path='/'>
          {' '}
          <Home />
        </Route>

        <Route exact path='/resume'>
          {' '}
          <Resume />
        </Route>
        <Route exact path='/contact'>
          {' '}
          <Contact />
        </Route>
        <Route exact path='/Portfolio'>
          {' '}
          <Portfolio />
        </Route>
      </Switch>
    </>
  )
}

export default App
