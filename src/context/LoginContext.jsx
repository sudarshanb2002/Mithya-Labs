// src/context/LoginContext.js
import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('user'); // Default role is 'user'

  const login = (userRole) => {
    setIsLoggedIn(true);
    setRole(userRole); // Set the role on login
  };
  const logout = () => {
    setIsLoggedIn(false);
    setRole('user'); // Reset role on logout
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
      
    </LoginContext.Provider>
  );
};
