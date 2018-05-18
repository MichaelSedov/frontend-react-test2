import React, { Component } from 'react'

const Loading = function({ ...props }) {
  console.log("I'm here")
  return <div className="loading">
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  </div>
}
  

export default Loading