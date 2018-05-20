import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { LOG_OUT } from '../../actions/actionTypes';
import { connect } from 'react-redux'
import './Header.css'

class Header extends Component {
  render() {
    const { authorization: { user }, signOut } = this.props

    return (
      <header className="header">
        <ul className="header__menu">
          <li className="header__menu-item">
            <NavLink className="header__link" activeClassName="header__link--active" to="/news">News</NavLink>
          </li>
          { user && 
            <li className="header__menu-item">
              <NavLink className="header__link" activeClassName="header__link--active" to="/profile">Profile</NavLink>
            </li>
          }
          <li className="header__menu-item">
            <NavLink className="header__link" activeClassName="header__link--active" onClick={user && signOut} to="/login">{user ? "Log out" : "Login"}</NavLink>
          </li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))