import React from 'react'
import '../../pages/home/home.css'
import './chat.css'
import Cam from '../../img/cam.png'
import Add from '../../img/add.png'
import More from '../../img/more.png'
import Messages from '../messages/Messages'
import Input from '../input/Input'

const Chat = () => {
  return (
    <div className='chatApp__chat'>
      <div className="chatApp__chat-info">
        <span>Friend</span>
        <div className="chatApp__chat-info_icons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat