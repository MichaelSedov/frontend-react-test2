import React, { Component } from 'react'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Auth } from '../actions/AuthorizationActions'

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isValidEmail: false 
    }
  }

  render() {
    if (this.props.authorization.user) {
      return <Redirect to={"/profile"} />
    }

    return (
      <Login {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  logIn: (email, password) => dispatch(Auth(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)