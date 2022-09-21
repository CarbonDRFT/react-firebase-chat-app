import React from 'react'
import './home.css'
import {Chat, Chats, Input, Message, Navbar, Search, Sidebar} from '../../components'


const Home = () => {
  return (
    <div className='chatApp__home'>
      <div className="chatApp__home-container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home