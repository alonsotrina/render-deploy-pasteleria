import React from "react";
import Counter from "../Counter/Counter";
import { CustomButtonAction } from "../ui";
import { DeleteOutlined } from "@ant-design/icons";
import { formatter } from "../../utils/formatters";
import { useBasket } from "../../hooks/useBasket";
import ProductImage from "../../assets/products.jpg";
import { useProduct } from "../../context/ProductContext";

const ProductsInCart = () => {
    const { cart, dispatch } = useBasket();
    const { porcion } = useProduct()

    const handleDelete = (id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { id }
        });
    };

    const handleIncreaseCount = (id) => {
        dispatch({
            type: "INCREASE_COUNT",
            payload: { id }
        });
    };

    const handleDecreaseCount = (id) => {
        dispatch({
            type: "DECREASE_COUNT",
            payload: { id }
        });
    };

    return (
        <>

            <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.items.map((item) => (
                    <li className="flex py-5" key={item.id}>
                        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                                src={ProductImage}
                                alt="img"
                                className="size-full object-cover"
                            />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                                <p className="text-xs text-gray-500">{item.nombre_categoria}</p>
                                <div className="justify-between text-base font-medium">
                                    <h3 className="text-sm text-slate-800">{item.nombre_producto}</h3>
                                    <p className="text-sm text-slate-700">
                                        {formatter.format(item.count * item.precio)}
                                    </p>
                                </div>

                                <p className="text-xs text-gray-500">Porción 
                                    {porcion === 1 && ' 10'}
                                    {porcion === 1.5 && ' 20'}
                                    {porcion === 2.5 && ' 30'}
                                </p>
                                <p className="text-xs text-gray-500">Azucar {item.azucar === true ? 'Sí' : 'No'}   -   Gluten {item.gluten === true ? 'Sí' : 'No'}   -   Lactosa {item.lactosa === true ? 'Sí' : 'No'} </p>
                            </div>


                            <div className="flex flex-1 items-end justify-between text-sm">
                                <Counter
                                    counter={item.count}
                                    handelIncrease={() => handleIncreaseCount(item.id)}
                                    handleDiscount={() => handleDecreaseCount(item.id)}
                                    classIcon="!text-[14px] !text-slate-600"
                                    textCounter="text-base font-normal text-slate-600"
                                />

                                <CustomButtonAction
                                    color="default"
                                    onClick={() => handleDelete(item.id)}
                                    shape="circle"
                                    size="large"
                                    variant="link"
                                    icon={<DeleteOutlined className="!text-red-600" />}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {/* <h3 className="text-base text-slate-800 mt-8">Otros cargos</h3> */}

            {/* <ul role="list" className="my-3 divide-y divide-gray-200">
                <li className="text-sm text-slate-600 justify-between py-3">
                    <span>cargos por servicio</span>
                    <span>${formatter.format(0)}</span>
                </li>

                <li className="text-sm text-slate-600 justify-between py-3">
                    <span>cargos por servicio</span>
                    <span>${formatter.format(0)}</span>
                </li>
            </ul> */}
        </>
    );
};

export default ProductsInCart;
