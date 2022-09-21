import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='chatApp__search'>
      <div className="chatApp__search-form">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="chatApp__search-chat">
        <img src="https://images.pexels.com/photos/11557430/pexels-photo-11557430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
        <div className="chatApp__search-chat_info">
          <span>Friend</span>
        </div>
      </div>
    </div>
  )
}

export default Search