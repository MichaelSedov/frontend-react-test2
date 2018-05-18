import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Auth } from '../../actions/AuthorizationActions'
import ErrorMessage from '../../components/ErrorMessage'
import { connect } from 'react-redux'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isValidEmail: true
    }
  }

  emailValidation = (event) => {
    const { value } = event.currentTarget
    const regexp = /[^\s@]+@[^\s@]+\.[^\s@]+/
    
    this.setState({
      isValidEmail: regexp.test(value) ? true : false
    })

    return regexp.test(value);
  } 
    
  handleChange = (event) => {
    const { value, dataset: { fieldName } } = event.currentTarget
    
    this.setState({
      [fieldName]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, isValidEmail } = this.state

    if (isValidEmail) {
      this.props.logIn(email, password)
    }
  }
  
  render() {
    const { authorization } = this.props
    const { isValidEmail } = this.state

    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <h1>Login</h1>
        <div className="login-form__group">
          <label className="login-form__label">Login</label>
          <input className="login-form__input" onBlur={this.emailValidation} data-field-name={'email'} type="text" onChange={this.handleChange}/>
          { !isValidEmail &&
            <ErrorMessage message={"Wrong email"} />
          }
        </div>
        <div className="login-form__group">
          <label className="login-form__label">Password</label>
          <input className="login-form__input" type="text" data-field-name={'password'} onChange={this.handleChange}/>
        </div>
        { authorization.errorMsg &&
          <ErrorMessage message={authorization.errorMsg} />
        }
        <button disabled={authorization.isLoading} type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  logIn: (email, password) => dispatch(Auth(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)