import { data } from 'autoprefixer'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import './Login.css'


const Login = (props) => {

  const history= use history();

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
    
<div class="login-wrapper">
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username">

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password">

        <button>Log In</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
</div>

  )
}

export default Login