
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import adminMenuItems from './adminMenuItems'; 
const { Header, Sider, Content } = Layout;

const AdminlLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentKey = adminMenuItems.find(item => item.path === location.pathname)?.key || '1';

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="!w-[756px] h-[100vh] !bg-red-500">
        <h1 className='text-red-400'>menu</h1>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={currentKey}
          items={adminMenuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            // style={{
            //   fontSize: '16px',
            //   width: 64,
            //   height: 64,
            // }}
          />
        </Header>
        <Content>
           <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminlLayout;
