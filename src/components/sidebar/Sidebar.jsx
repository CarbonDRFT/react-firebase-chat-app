import React from 'react'
import '../../pages/home/home.css'
import './sidebar.css'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import Chats from '../chats/Chats'
 
const Sidebar = () => {
  return (
    <div className='chatApp__sidebar'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar