import React, { Component } from 'react'

class Profile extends Component {
  renderSocials = () => {
    const { userProfile } = this.props
    let webIndex = 0;
   
    const socialsList =  userProfile.data.social.map(function(item, i) {
      webIndex = item.label == "web" ? i : webIndex
      return <li key={i}>{`${item.label}`} <a target="_blank" rel="noopener" href={`${item.link}`}>link</a></li>
    })

    if (socialsList != 0) {
      socialsList.unshift(socialsList[webIndex])
      socialsList.splice(webIndex + 1, 1)
    }
    
    return socialsList
  }
  render() {
    const { userProfile } = this.props
    console.log("User Profile", this.props.userProfile)
    return (
      <div>
        { userProfile && 
          <div className="profile">
            <span className="profile__city">{userProfile.data.city}</span>
            <span>Знание языков:</span>
            <ul className="profile__languages">
              {userProfile.data.languages.map((language, i) => <li key={i}>{language}</li>)}
            </ul>
            <span>Ссылки:</span>
            <ul className="profile__languages">
              {this.renderSocials()}
            </ul>
          </div> 
        }
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default Profile