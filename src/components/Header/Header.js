import React, { Component } from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import { LOG_OUT } from '../../actions/actionTypes';
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { authorization: { user }, signOut } = this.props
    return (
      <header className="header">
        <ul className="header__menu">
          <li className="header__menu-item"><NavLink to="/home">Home</NavLink></li>
          <li className="header__menu-item"><NavLink to="/news">News</NavLink></li>
          { user && 
            <li className="header__menu-item"><NavLink to="/profile">Profile</NavLink></li>
          }
          <NavLink onClick={user && signOut} to="/login">{user ? "Log out" : "Login"}</NavLink>

        </ul>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch({ type: LOG_OUT })
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)