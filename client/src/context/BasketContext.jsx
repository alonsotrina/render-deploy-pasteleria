import React, { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { ENDPOINT } from '../config/endpoints'
import useIsOpen from '../hooks/useIsOpen'
import useHttp from "../hooks/useHttp";
import { useAuth } from "../hooks/useAuth";

export const BasketContext = createContext(null)

const initialState = {
    items: [],
    total: 0,
    totalItem: 0,
    msg: ''
};

const initialStateOrders = {
    results: [],
    pagination: {},
    total: 0,
};
const initialStateOrderDetail = {
    data: {},
    msg: ''
};

const BasketProvider = ({ children }) => {
    const { state, toggle: open } = useIsOpen()
    const { perfil, session } = useAuth();
    const { request } = useHttp()
    const [cart, dispatch] = useReducer(cartReducer, initialState);
    const [orders, setOrders] = useState(initialStateOrders)
    const [orderDetail, setOrderDetail] = useState(initialStateOrderDetail)
    const [currentPage, setCurrentPage] = useState(1);

    // POST Creando una orden
    const enviandoOrden = async (token, dataPost) => {
        try {
            const data = await request(`${ENDPOINT.order}`, "POST", dataPost, {
                Authorization: `Bearer ${token}`
            });

            // setOrden(data)
            console.log("Orden enviada:", data);

            // Limpiando carrito
            dispatch({
                type: "CLEAR_CART"
            });

        } catch (err) {
            console.error("Error al enviar la orden:", err);
        }
    };

    // GET listado de orden
    const fetchAllOrders = async () => {
        try {
            const data = await request(`${ENDPOINT.order_user}/${perfil?.id}?page=${currentPage}`, "GET", null, {
                Authorization: `Bearer ${session.token}`
            });

            const { results, pagination, total } = data.data;

            setOrders({
                results: results || [],
                pagination: pagination || {},
                total: parseInt(total) || 0,
            });

        } catch (err) {
            console.error("Error fetching comunas:", err);
        }
    };

    // GET detalle de la orden 
    const fetchAllOrdersDetail = async (order_id) => {
        try {
            const response = await request(`${ENDPOINT.order_user}/${perfil?.id}/detalle/${order_id}`, "GET", null, {
                Authorization: `Bearer ${session.token}`
            });

            console.log('orderDetail-fetch', response)

            const { data, msg } = response;

            setOrderDetail({
                data: data,
                msg: msg
            })
        } catch (err) {
            console.error("Error fetching comunas:", err);
        }
    };

    // Se eejcuta solo cuando exite el token y el id del usuario
    useEffect(() => {
        if (perfil?.id && session?.token) {
            fetchAllOrders();
        }
    }, [perfil?.id, session?.token, currentPage]);

    // localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            dispatch({
                type: "SET_CART",
                payload: JSON.parse(savedCart),
            });
        }
    }, []);

    // Guardar el carrito en localStorage cada vez que cambie el estado
    useEffect(() => {
        if (cart.items.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.removeItem('cart');
        }
    }, [cart]);

    // //Actualizando la paginación listado de productos de currentPage
    // useEffect(() => {
    //     fetchAllOrders();
    // }, [currentPage]);

    return (
        <BasketContext.Provider value={{ cart, dispatch, state, open, enviandoOrden, orders, fetchAllOrdersDetail, orderDetail, setCurrentPage }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider