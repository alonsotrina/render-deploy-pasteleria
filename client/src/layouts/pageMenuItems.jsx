import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingOutlined } from '@ant-design/icons';

const pageMenuItems = [
    {
        key: '0',
        icon: '',
        label: <Link to="/register">Register</Link>,
        path: '/register'
    },
    {
        key: '1',
        icon: '',
        label: <Link to="/us">Nosotros</Link>,
        path: '/us'
    },
    {
        key: '2',
        icon: '',
        label: <Link to="/profile">Perfil</Link>,
        path: '/profile'
    },
    {
        key: '3',
        icon: '',
        label: <Link to="/basket"><ShoppingOutlined /></Link>,
        path: '/basket'
    },
];

export default pageMenuItems;