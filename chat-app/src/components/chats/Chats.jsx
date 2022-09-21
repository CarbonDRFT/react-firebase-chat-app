import React from 'react'
import './chats.css'

const chats = () => {
  return (
    <div className='chatApp__chats'>
      <div className="chatApp__chats-chat">
        <img src="https://images.pexels.com/photos/11557430/pexels-photo-11557430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
        <div className="chatApp__chats-chat_info">
          <span>Friend</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatApp__chats-chat">
        <img src="https://images.pexels.com/photos/11557430/pexels-photo-11557430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
        <div className="chatApp__chats-chat_info">
          <span>Friend</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatApp__chats-chat">
        <img src="https://images.pexels.com/photos/11557430/pexels-photo-11557430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
        <div className="chatApp__chats-chat_info">
          <span>Friend</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default chats