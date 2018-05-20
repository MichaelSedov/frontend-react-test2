import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = function({ component: Component, ...rest }) {
  return <Route
    {...rest}
    render={props =>
      rest.isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authorization.user
  }
}

export default connect(mapStateToProps)(PrivateRoute)