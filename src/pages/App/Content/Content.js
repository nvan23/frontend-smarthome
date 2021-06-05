import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import './content.css'

import LoginPage from '../../Login'
import HomesPage from '../../Homes'
import HomePage from '../../Home'
import UsersPage from '../../Users'
import MembersPage from '../../Members'
import RoomsPage from '../../Rooms'
import SensorsPage from '../../Sensors'
import ProfilePage from '../../Profile'
import NotFoundPage from '../../NotFound'

const Content = () => {
  return (
    <div className='content__container'>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/homes" component={HomesPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/members" component={MembersPage} />
        <Route exact path="/rooms" component={RoomsPage} />
        <Route exact path="/sensors" component={SensorsPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route path="/404" component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default Content