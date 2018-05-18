import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import { connect } from 'react-redux'

import AuthenticatedRouter from './routers/AuthenticatedRouter';
import { withRouter } from 'react-router-dom'
import PrivateRoute from './routers/PrivateRoute'
import UnauthenticatedRouter from './routers/UnauthenticatedRouter';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { 
      email: '', 
      password: '', 
      loading: false, 
      isError: false,
      isAuth: false }
  }
  render() {
    console.log("APP PROPS", this.props)
    console.log("APP STATE", this.state)
    return (
      <div className="App">
        <Header />
        <AuthenticatedRouter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('State', state)
  return state
}

export default connect(mapStateToProps)(App);
