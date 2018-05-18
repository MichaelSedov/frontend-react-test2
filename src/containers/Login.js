import React, { Component } from 'react'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '', loading: false, isError: false }
  }

  handleSubmit = (e) => {
    const { email, password } = this.state;

    e.preventDefault();

    this.setState({
      loading: true
    })
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    console.log("THIS STATE", this.props)
    if (this.props.authorization.user) {
      return <Redirect to={"/profile"} />
    }

    return (
      <div className='full-screen-view'>
        {/* {this.state.loading ? <LoadingPane/> : null} */}

        <Login
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          error={this.state.isError}
        />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(LoginContainer)