import React from 'react'
import './Loading'

const Loading = function({ ...props }) {
  return <div className="loading">
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  </div>
}
  
export default Loading