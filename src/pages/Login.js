import React from 'react'
import './Login.css'


function Login() {
  return (
    <div className='login-warp'>
      <div className='login-card'>
        <div className='title'>login</div>
        <input type='text' />
        <input type='password' />        
        <button>Login</button>
        <p><a className='forget-pass'>forget password?</a></p>
      </div>
    </div>
  )
}

export default Login