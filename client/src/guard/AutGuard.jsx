import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = ({ children, isAllow, redirectTo = '/' }) => {
	const { isLoading } = useAuth();
  
	if (isLoading) {
	  return <div>Loading...</div>; // Aquí podrías agregar un spinner más bonito
	}
  
	if (!isAllow) {
	  return <Navigate to={redirectTo} replace />;
	}
  
	return children ? children : <Outlet />;
  };

