import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='chatApp__register-container'>
      <div className="chatApp__register-container_form">
        <div className="chatApp__register-container_form-logo">Happy Chat</div>
        <h1>Register</h1>
        <form>
          <input type="text" placeholder='display name'/>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password '/>
          <input type="file" />
          <button type='button'>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register