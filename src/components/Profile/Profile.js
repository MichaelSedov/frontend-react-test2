import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
  renderSocials = () => {
    const { userProfile } = this.props
    let webIndex = 0;
   
    const socialsList =  userProfile.data.social.map(function(item, i) {
      webIndex = item.label === "web" ? i : webIndex
      
      return (
        <li className="social-item" key={i}>{`${item.label}`} 
          <a target="_blank" className="social-item__link" rel="noopener" href={`${item.link}`}>
            <img className="social-item__img" src={`/images/${item.label}.png`} alt={`icon-${item.label}`} />
          </a>
        </li>
      )
    })

    if (socialsList !== 0) {
      socialsList.unshift(socialsList[webIndex])
      socialsList.splice(webIndex + 1, 1)
    }
    
    return socialsList
  }
  render() {
    const { userProfile } = this.props

    return (
      <div>
        { userProfile && userProfile.status !== "err" ?
          <div className="profile">
            <span className="profile__city">{`Город: ${userProfile.data.city}`}</span>
            <span className="profile__title">Знание языков:</span>
            <ul className="profile__languages">
              {userProfile.data.languages.map((language, i) => <li key={i}>{language}</li>)}
            </ul>
            <span className="profile__title">Ссылки:</span>
            <ul className="profile__socials">
              {this.renderSocials()}
            </ul>
          </div> 
          : "Пользователь не найден"
        }
      </div>
      
    )
  }
}

export default Profile