import React from 'react'
import { formatter } from "../../utils/formatters";
import { CustomButtom, CustomButtonAction } from '.';
import { ArrowRightOutlined } from '@ant-design/icons';

const CardProduct = ({ name = 'Producto', src, href = '/baskte', category = 'nombre categoria', price = '1000' }) => {
    return (
        <div className="bg-black/0">
            <div className="relative">
                <img
                    alt="example"
                    src={src}
                    className='rounded-2xl w-full h-[200px] object-cover'
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 via-slate-800/10 to-slate-800/20 rounded-2xl z-2"></div>

                <div className="bg-[#f1f1f1] w-[60px] h-[60px] absolute right-0 bottom-0 z-4 justify-center rounded-tl-xl">

                    <CustomButtonAction
                        color="default"
                        onClick={href}
                        shape="circle"
                        size='large'
                        icon={<ArrowRightOutlined className="!text-[20px] !text-white" />}
                        // className="!p-8"
                    />

                    {/* <CustomButtom
                        color="default"
                        href={href}
                        shape="circle"
                        size='large'
                        icon={<ArrowRightOutlined className="!text-[20px] !text-white" />}
                    /> */}
                </div>
            </div>

            <div className="px-3 my-5">
                <div className="justify-between mb-2">
                    <h3 className="text-sm font-light text-slate-700">{category}</h3>
                    <h3 className="text-sm font-light text-slate-700">$ {formatter.format(price)}</h3>
                </div>

                <h4 className="text-xl text-slate-700 font-normal">{name}</h4>
            </div>
        </div>
    )
}

export default CardProduct