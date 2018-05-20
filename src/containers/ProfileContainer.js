import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import Loading from '../components/Loading'
import { getUserProfile } from '../actions/ProfileActions'

class ProfileContainer extends Component {
  componentDidMount() {
    const { authorization: { user } } = this.props

    this.props.getProfile(user.id)
  }

  render() {
    const { data, isLoading } = this.props.profile

    return (
      isLoading ? <Loading /> : <div className="profile-container">
        { data.data && <Profile userProfile={data.data} />  }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  getProfile: (id) => dispatch(getUserProfile(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
