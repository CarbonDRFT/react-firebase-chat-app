import React from 'react'
import Add from '../../img/addAvatar.png'
import './login.css'

const Login = () => {
  return (
    <div className='chatApp__login-container'>
      <div className="chatApp__login-container_form">
        <div className="chatApp__login-container_form-logo">Happy Chat</div>
        <h1>login</h1>
        <form>
          
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password '/>

          <button type='button'>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login