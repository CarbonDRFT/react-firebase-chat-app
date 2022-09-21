import React from 'react'
import './navbar.css'

function navbar() {
  return (
    <div className='chatApp__navbar'>
      <span className="chatApp__navbar-logo">Smile Chat
      </span>
      <div className="chatApp__navbar-user">
        <img src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Danier</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default navbar