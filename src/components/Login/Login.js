import React, { Component } from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import './Login.css'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isValidEmail: true
    }
  }

  componentWillReceiveProps(nextProps) {
    const { authorization } = nextProps

    if (authorization.errorMsg) {
      this.setState({
        password: ''
      })
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
    const { authorization } = this.props
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
            <ErrorMessage message={"невалидный e-mail адрес"} />
          }
        </div>
        <div className="login-form__group">
          <label className="login-form__label">Password</label>
          <input className="login-form__input" type="password" data-field-name={'password'} value={this.state.password} onChange={this.handleChange}/>
          { authorization.errorMsg &&
            <ErrorMessage message={authorization.errorMsg} />
          }
        </div>
        <button className="login-form__btn btn" disabled={authorization.isLoading} type="submit">{authorization.isLoading ? "Checking..." : "Submit"}</button>
      </form>
    )
  }
}

export default Login