import React from 'react'
import './message.css'

export default function Message() {
  return (
    <div className='chatApp__message owner'>
      <div className="chatApp__message-info">
        <img src="https://images.pexels.com/photos/11557430/pexels-photo-11557430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>just now</span>
      </div>
      <div className="chatApp__message-content">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/11557430/pexels-photo-11557430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}
