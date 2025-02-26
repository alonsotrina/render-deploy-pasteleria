import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import CustomDropdowm  from "../ui/CustomDropdown";


const DropdownAuth = () => {
    const { openModal, session, logout } = useAuth()
    const navigate = useNavigate();

    const item = [
        {
            key: '1',
            label: `Bienvenido Dolce Vita`,
            disabled: true,
        },
        {
            type: 'divider',
        },
        !session?.token && {
            key: '2',
            label: 'Iniciar sesión',
            path: '',
            onClick: () => openModal('modalOpen'),
            extra: ' ',
        },
        !session?.token && {
            key: '3',
            label: 'Registrate',
            path: '/register',
            onClick: () => navigate('/register'),
            extra: '',
        },
        session?.token && {
            key: '4',
            label: 'Mis compras',
            path: '/orders',
            onClick: () => navigate('/orders'),
            extra: '',
        },
        session?.token && {
            key: '5',
            label: 'Perfil',
            path: '/profile',
            onClick: () => navigate('/profile'),
            extra: '',
        },
        session?.token && {
            key: '6',
            label: 'Cerrar sesión',
            path: '',
            onClick: () => logout(),
            extra: '',
        },
    ];
    return (
        <CustomDropdowm
            title="Hola, Iniciar Sesión"
            items={item}
            className='!text-stone-800 text-sm'
        />
    )
}

export default DropdownAuth