import React from "react";
import { Drawer } from "antd";
import { useBasket } from "../../hooks/useBasket";
import { CustomButtom, CustomButtonAction, Loading, ProductsInCart } from "../../components";
import { formatter } from "../../utils/formatters";
import { useAuth } from "../../hooks/useAuth";

const Basket = () => {
  const { state, open, cart, dispatch, enviandoOrden } = useBasket();
  const { session, perfil, openModal } = useAuth();

  const handleClear = () => {
    dispatch({
      type: "CLEAR_CART"
    });
  }

  const nuevoArray = cart.items.map(({ id, nombre_producto, count }) => ({
    producto_id: id,
    porcion_id: 3,
    cantidad: count
  }));

  let dataEN = {
    user_id: perfil?.id,
    estado_id: 1,
    detalle_orden: nuevoArray
  }

  const handleSubmitData = () => {
    open("loading")
    setTimeout(() => {
      enviandoOrden(session.token, dataEN)
      // sacar loading
      open("loading")
    }, 3000);
  }

  const handleLogin = () => {
    // cerrar carrito
    open("basketOpen")
    // abrir modal
    openModal('modalOpen')
  }

  return (
    <>
      <Drawer
        title={`Tu bolsa (${cart.totalItem})`}
        onClose={() => open("basketOpen")}
        open={state.basketOpen}
        className="relative"
      >
        <div className="mt-2 mb-[140px]">

          {
            state.loading &&
            <div className='text-center'>
              <h2 className='text-lg text-dark-900/80 my-3'>Estamos procesando tu compra..</h2>
            </div>
          }
          


          <div className='text-center'>
              <h2 className='text-lg text-dark-900/80 my-3'>puedes ver el detalle de tu compra </h2>
              <CustomButtom
                color="default"
                size="large"
                name="Ver tus compras"
                href={`/`}
                variant='link'
              />
            </div>

          {/* {
            orden &&
            <div className='text-center'>
              <h2 className='text-lg text-dark-900/80 my-3'>{orden.msg}, puedes ver el detalle de tu compra </h2>
              <CustomButtom
                color="default"
                size="large"
                name="Ver tus compras"
                href={`/`}
                variant='link'
              />
            </div>
          } */}

          <div>
            {
              state.loading ?
                null
                :

                <div>

                  {
                    cart.items < 1 ?
                      <div className='text-center'>
                        <h2 className='text-lg text-dark-900/80 my-3'>Tu carrito esta vacio...</h2>
                      </div>
                      :
                      <>
                        <div className="flex justify-end mb-6">
                          <CustomButtonAction
                            color="primary"
                            onClick={handleClear}
                            size="small"
                            variant='link'
                            name='Vaciar bolsa'
                          />
                        </div>


                        <ProductsInCart />
                      </>
                  }
                </div>
            }
          </div>
        </div>

        <div className="bg-white absolute w-full bottom-0 left-0 border-t border-gray-200 p-4">
          <div className="justify-between">
            <div>
              <h3 className="text-xs text-slate-700">Subtotal</h3>
              <h3 className="text-xl text-slate-700">${formatter.format(cart.total)}</h3>
            </div>

            <CustomButtonAction
              color="default"
              onClick={session.token ? handleSubmitData : handleLogin}
              size="large"
              name={session.token ? 'Pagar' : 'Inicia sesión'}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Basket;
