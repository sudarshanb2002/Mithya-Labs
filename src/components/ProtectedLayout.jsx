// src/components/ProtectedLayout.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const ProtectedLayout = ({ children, requiredRole }) => {
  const { isLoggedIn, role } = useContext(LoginContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" />; // Redirect to home or a not-authorized page
  }

  return children;
};

export default ProtectedLayout;
