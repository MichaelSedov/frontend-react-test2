import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ProfileContainer from '../containers/ProfileContainer'
import NewsContainer from '../containers/NewsContainer'
import LoginContainer from '../containers/LoginContainer'

const Routers = () => {
    return (
      <div className='content'>
        <Switch>
          <Route exact path='/' component={LoginContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/news" component={NewsContainer} />
          <PrivateRoute exact path='/profile' component={ProfileContainer} />
        </Switch>
      </div>
    )
  }
  
  export default withRouter(Routers);