import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { LoginModal, Footer, NavBar } from '../components/index';
import { useAuth } from '../hooks/useAuth';
const { Header, Content } = Layout;

const PageLayout = () => {
  const { state, openModal } = useAuth()

  return (
    <>
      <Layout>
        <Header className='justify-between !bg-white'>
          <NavBar />
        </Header>

        <Content className='py-8 w-[95%] mx-auto'>
          <div style={{ minHeight: '60vh' }}>
            <Outlet />
          </div>
        </Content>

        <Footer />
      </Layout>

      <LoginModal
        isOpen={state.modalOpen}
        toggle={() => openModal('modalOpen')}
      />
    </>

  );
};

export default PageLayout;