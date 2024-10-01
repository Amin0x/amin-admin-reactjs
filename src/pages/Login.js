import { data } from 'autoprefixer'
import React, { useState } from 'react'
import './Login.css'


const Login = () => {

  let [state, setState] = useState({
    logining: false,
    error: [],
  });

  function login(){
    setState({...state, logining: true});
    const response = await fetch({
      url: '/admin/login',
      method: 'post'
    });

    const data = await response.json();

    setState({...state, logining: false});

    if (!response.ok){
        setState({...state, error: true});
        return;
    }

    this.props.history.push("/")
    
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