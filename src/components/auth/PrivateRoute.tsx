import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

interface PrivateRouteProps {
    element: React.ReactElement;
  }

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useAuth();

  return user ? element : <Navigate to="/login" />
};

export default PrivateRoute;