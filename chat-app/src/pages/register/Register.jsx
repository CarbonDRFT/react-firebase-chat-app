import {useState, React} from 'react'
import Add from '../../img/addAvatar.png'
import './register.css'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e)=> {
    e.preventDefault()
    console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;

try{
  
   const res = await createUserWithEmailAndPassword(auth, email, password)
} catch(err) {
  setErr(true)

}
  }

  return (
    <div className='chatApp__register-container'>
      <div className="chatApp__register-container_form">
        <div className="chatApp__register-container_form-logo">Happy Chat</div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="test" placeholder='display name'/>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password '/>
          <input style={{display:"none"}} type="file" id='file' />
          <label htmlFor="file">
            <img src={Add} alt="Avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}


export default Register