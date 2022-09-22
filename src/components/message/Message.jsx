import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import './message.css'

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={ref} className={`chatApp__message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="chatApp__message-info">
        <img  src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          } alt="" />
        <span>just now</span>
      </div>
      <div className="chatApp__message-content">
      <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message;