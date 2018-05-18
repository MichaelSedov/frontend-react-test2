import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = function({ component: Component, ...rest }) {
  const token = sessionStorage.getItem('id');
  console.log("ID", token)
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