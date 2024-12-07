import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = (props) => {
  const history = useHistory(); // Corrected `useHistory` import
  const [state, setState] = useState({
    logining: false,
    error: [],
  });

  // Async login function
  const login = async (e) => {
    e.preventDefault(); // Prevent form default behavior (page reload)

    setState({ ...state, logining: true });

    try {
      const response = await fetch('/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: document.getElementById('username').value,
          password: document.getElementById('password').value,
        }),
      });

      const data = await response.json();
      setState({ ...state, logining: false });

      if (!response.ok) {
        setState({ ...state, error: data.error || ['Login failed'] });
        return;
      }

      history.push('/'); // Redirect to homepage
    } catch (error) {
      setState({ ...state, logining: false, error: ['Error during login'] });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={login}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" required />

        <button type="submit" disabled={state.logining}>
          {state.logining ? 'Logging in...' : 'Log In'}
        </button>

        {state.error.length > 0 && (
          <div className="error">
            {state.error.map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
        )}

        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;