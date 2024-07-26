// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useContext(LoginContext);

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
