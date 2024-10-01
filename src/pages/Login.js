import { data } from 'autoprefixer'
import React, { useState } from 'react'
import './Login.css'


let Login = () => {

  let [state, setState] = useState({
    error: [],
  });

  function login(){
    fetch({
      url: '/admin/login',
      method: 'post'
    })
    .then(response => {})
    .then(data => {})
    .catch(err => {});
  }

  return (
    <div className='login-warp'>
      <div className='login-card'>
        <div className='title'>login</div>
        <input type='text' placeholder='USER NAME'/>
        <input type='password' placeholder='PASSWORD' />        
        <button onClick={() => login()}>Login</button>
        <p><button className='forget-pass'>forget password?</button></p>
      </div>
    </div>
  )
}

export default Login