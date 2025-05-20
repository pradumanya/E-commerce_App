import React from 'react'
import "./LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="login-signup-container">
        <h1>sigin Up</h1>
        <div className='loginsignup-fields'>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type="continue">Continue</button>
        </div>
          <p className='loginsignup-login'>
            already have an account? <span>Login</span>
          </p>
  <div className='loginsignup -agree'> 
            <input type="checkbox" /> I agree to the <span>Terms and Conditions</span> and <span>Privacy Policy</span>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup