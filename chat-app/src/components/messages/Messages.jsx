import React from 'react'
import Message from '../message/Message'
import './messages.css'

function Messages() {
  return (
    <div className='chatApp__messages'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages