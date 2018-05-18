import React from 'react'
import { Route } from 'react-router-dom'

import LoginContainer from '../containers/Login'

const UnauthenticatedRouter = ({match}) => {
  return (
    <div className='body'>
      <Route path='/' component={LoginContainer} />
      <Route path='/news' component={LoginContainer} />
      <Route path='/login' component={LoginContainer} />
    </div>
  )
}

export default UnauthenticatedRouter;