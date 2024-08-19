import './LoginSignUp.css'
import email from '../assets/email.png'
import password from '../assets/password.png'
import person from '../assets/person.png'
import { useState } from 'react'


function LoginSignUp() {

  const [action, setAction] = useState("Login");


  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">

        <div className="input">
          <img src={person} alt="personImg" />
          <input type="text" placeholder='Enter your name' />
        </div>

        {action === 'Sign Up' ? <div className="input">
          <img src={email} alt="email" />
          <input type="email" placeholder='Enter your email' />
        </div>:''}

        <div className="input">
          <img src={password} alt="password" />
          <input type="password" placeholder='Enter your password' />
        </div>
      </div>
     {action ==='Login'? <div className="forgot-password">Lost Password? <span>Click here</span></div>:''}
      <div className="submit-container">
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Sign Up')}
        >Sign Up</div>
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Login')}
        >
          Login</div>
      </div>
    </div>
  )
}

export default LoginSignUp
