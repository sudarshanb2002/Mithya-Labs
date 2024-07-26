import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import '../css/Login.css';
import loginimage from '../image/loginimage.jpg';

const Login = () => {
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();
  const [role, setRole] = useState('User'); // Default to 'User'

  const handleLogin = (e) => {
    e.preventDefault();
    login(role);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginimage} alt="Login" />
      </div>
      <div className="login-form">
        <h2>Log In</h2>
        <div className="login-toggle">
          <button
            className={role === 'User' ? 'active' : ''}
            onClick={() => setRole('User')}
          >
            User
          </button>
          <button
            className={role === 'admin' ? 'active' : ''}
            onClick={() => setRole('admin')}
          >
            admin
          </button>
        </div>
        <form onSubmit={handleLogin}>
          {role === 'User' && (
            <>
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
            </>
          )}
          {role === 'admin' && (
            <>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
            </>
          )}

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
