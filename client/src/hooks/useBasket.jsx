import { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';

export const useBasket = () => {
  const { cart, dispatch, state, open,enviandoOrden, orders, fetchAllOrdersDetail, orderDetail, setCurrentPage} = useContext(BasketContext) 
  
  return { 
    cart,
    dispatch,
    state, 
    open,
    enviandoOrden,
    orders,
    fetchAllOrdersDetail,
    orderDetail,
    setCurrentPage
  };
}