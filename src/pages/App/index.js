import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import './base.css'
import './pages.css'

import Header from './Header'
import Footer from './Footer'
import Content from './Content'

import config from '../../config'

const AppContainer = () => {
  console.log("REACT_APP_API_URL", config.API_URL)
  return (
    <div className='grid wide'>
      <div className="page__container">
        <Router>
          <Header />
          <Content />
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default AppContainer