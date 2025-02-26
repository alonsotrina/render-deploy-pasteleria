import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingOutlined, HeartOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';
import { useBasket } from '../../hooks/useBasket';
import { DropdownAuth } from '../index';

const NavBar = ({ className }) => {
    const { session } = useAuth()
    const { open } = useBasket()

    return (
        <nav className={`justify-between !bg-white w-full ${className}`}>
            <Link to="/"
                className='text-xl !text-gray-700 font-normal basis-1/3'
            >
                DOLCE VITA
            </Link>

            <div className='flex justify-end items-center'>
                <Link to="/products"
                    className='!text-stone-800 text-sm'
                >
                    Productos
                </Link>


                <div className="h-5 border-[0.5px] !text-stone-800 mx-4"></div>

                {/* <Link to="/us"
                    className='!text-stone-800 text-sm'
                >
                    Nosotros
                </Link> */}

                {/* <div className="h-5 border-[0.5px] !text-stone-800 mx-4"></div> */}

                {/* Menú iniciar sesión */}
                <DropdownAuth />

                <div className="h-5 border-[0.5px] text-stone-800 mx-4"></div>

                {
                    session?.token &&
                    <>
                        <Link to="/favorite"
                            className='!text-stone-800 text-lg'
                        >
                            <HeartOutlined />
                        </Link>

                        <div className="h-5 border-[0.5px] text-stone-800 mx-4"></div>
                    </>
                }

                <Link
                    className='!text-stone-800 text-lg'
                >
                    <ShoppingOutlined onClick={() => open('basketOpen')} />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar