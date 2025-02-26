import React from 'react'
import { Button, Divider, Table } from 'antd';
import { useBasket } from '../../hooks/useBasket';
import useIsOpen from '../../hooks/useIsOpen';
import { DetailOrdenModal } from '../../components';

const Orders = () => {
    const { orders, fetchAllOrdersDetail, setCurrentPage } = useBasket();
    const { state, toggle } = useIsOpen()

    const handleViewDetail = async (orderId) => {
        await fetchAllOrdersDetail(orderId);
        toggle('modalOpen')
    };

    const dataSource = orders?.results?.map(order => ({
        key: order.id,
        id: order.id,
        monto_total: order.monto_total,
        fecha_orden: order.fecha_orden,
        estado_id: order.estado_id === 1 && 'Pendiente',
    }));

    const columns = [
        {
            title: 'ID Compra',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Monto Total',
            dataIndex: 'monto_total',
            key: 'monto_total',
            render: (value) => `$${value.toLocaleString()}`, // Formato moneda
        },
        {
            title: 'Fecha de Orden',
            dataIndex: 'fecha_orden',
            key: 'fecha_orden',
            render: (value) => new Date(value).toLocaleDateString(), // Formato fecha legible
        },
        {
            title: 'Estado',
            dataIndex: 'estado_id',
            key: 'estado_id',
        },
        {
            title: 'Detalle',
            key: 'ver_detalle',
            render: (_, record) => (
                <Button type="link" onClick={() => handleViewDetail(record.id)}>
                    Ver Detalle
                </Button>
            ),
        },
    ];

    return (
        <>
            <h2 className="text-3xl font-light mb-3 text-black text-center">
                Mis pedidos
            </h2>

            <Table
                columns={columns}
                dataSource={dataSource}
                size="small"
                pagination={{
                    current: orders?.pagination?.current_page,
                    total: orders?.total || 0,
                    pageSize: orders?.pagination?.per_page,
                    onChange: (page) => {
                        setCurrentPage(page);
                    },
                }}
            />

            <DetailOrdenModal
                isOpen={state.modalOpen}
                toggle={() => toggle('modalOpen')}
            />
        </>
    )
}

export default Orders