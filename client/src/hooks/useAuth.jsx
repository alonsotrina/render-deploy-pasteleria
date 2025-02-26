import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

export const useAuth = () => {
  const { state, openModal, session, isLoading, handleSession, handleRegister, logout, perfil, handleProfile} = useContext(LoginContext) 

  return { 
    state, 
    openModal,
    session, 
    isLoading, 
    handleSession,
    handleRegister,
    perfil, 
    handleProfile,
    logout
  };
}