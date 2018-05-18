import React, { Component } from 'react'
import './ErrorMessage.css'

class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { message } = this.props
    
    return ( 
      <div className="error-message">{message}</div>
     )
  }
}
 
export default ErrorMessage;