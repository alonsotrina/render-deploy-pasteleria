import React from "react";
import { CustomAlert, CustomButtonAction, CustomInput, ModalComponent } from "../ui";
import { useBasket } from "../../hooks/useBasket";
import { Collapse, Divider, List, Table } from "antd";

const DetailOrdenModal = ({ isOpen, toggle }) => {
  const { orderDetail } = useBasket()

  const dataSource = orderDetail.data.results?.map(item => ({
    key: item.detalle_id,
    label: `${item.producto_nombre} - ${item.subtotal}`,
    children:
      <div>
        <ul role="list" className="my-3 divide-y divide-gray-200">
          <li className="text-sm text-slate-600 justify-between py-3">
            <span>Producto</span>
            <span>{item.producto_nombre}</span>
          </li>

          <li className="text-sm text-slate-600 justify-between py-3">
            <span>Porción</span>
            <span>{item.porcion_nombre}</span>
          </li>

          <li className="text-sm text-slate-600 justify-between py-3">
            <span>Cantidad</span>
            <span>{item.cantidad}</span>
          </li>

          <li className="text-sm text-slate-600 justify-between py-3">
            <span>precio</span>
            <span>{item.precio}</span>
          </li>

          <li className="text-sm text-slate-600 justify-between py-3">
            <span>subtotal</span>
            <span>{item.subtotal}</span>
          </li>
        </ul>

      </div>
  }));

  return (
    <ModalComponent
      title=""
      isOpen={isOpen}
      onClose={toggle}
      className="text-2xl"
      size="lg"
    >
      <h3 className="text-xl font-semibold text-stone-800 mt-5 mb-2">
        Detalle de la orden
      </h3>

      <ul role="list" className="my-3 divide-y divide-gray-200">
        <li className="text-sm text-slate-600 justify-between py-3">
          <span>N° Orden:</span>
          <span>{orderDetail.data.order_id}</span>
        </li>

        <li className="text-sm text-slate-600 justify-between py-3">
          <span>Fecha</span>
          <span>{new Date(orderDetail.data.fecha_orden).toLocaleDateString()}</span>
        </li>

        <li className="text-sm text-slate-600 justify-between py-3">
          <span>Total de productos</span>
          <span>{orderDetail.data.total_productos}</span>
        </li>

        <li className="text-sm text-slate-600 justify-between py-3">
          <span>total</span>
          <span>{orderDetail.data.total}</span>
        </li>
      </ul>

      <ul role="list" className="my-3 divide-y divide-gray-200">
        <li className="text-sm text-slate-600 justify-between py-3">
          <span>Total de productos ({orderDetail.data.total_productos})</span>
        </li>
      </ul>

      <Collapse accordion items={dataSource} />
    </ModalComponent>
  );
};

export default DetailOrdenModal;
