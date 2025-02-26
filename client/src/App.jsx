import React from 'react';
import MainRoutes from './router/MainRoutes';
import { Basket } from './pages/Index';
import { LoginModal } from '../src/components/index';
import { useAuth } from './hooks/useAuth';
import useIsOpen from './hooks/useIsOpen';

const App = () => {
  const { state, openModal } = useAuth()
  const { state: stateIsOpen } = useIsOpen()

  console.log('stateIsOpen', stateIsOpen)

  return (
    <>
      <MainRoutes />
      {/* Componets Drawer Basket */}
      <Basket />
      {/* login */}
      <LoginModal
        isOpen={state.modalOpen}
        toggle={() => openModal('modalOpen')}
      />

      {/* Loading */}
      {/* {stateIsOpen.loading && <Loading />} */}
    </>
  )
}

export default App
