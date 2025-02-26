import React from 'react';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const adminMenuItems = [
    {
        key: '0',
        icon: <UserOutlined />,
        label: <Link to="/admin/users">Usuarios</Link>,
        path: '/admin/users'
    },
    {
        key: '1',
        icon: <VideoCameraOutlined />,
        label: <Link to="/admin/portions">Portiones</Link>,
        path: '/admin/portions'
    },
    {
        key: '2',
        icon: <UploadOutlined />,
        label: <Link to="/admin/category">Categorías</Link>,
        path: '/admin/category'
    },
    {
        key: '3',
        icon: <VerticalAlignMiddleOutlined />,
        label: <Link to="/admin/products">Productos</Link>,
        path: '/admin/products'
    },
    
];

export default adminMenuItems;